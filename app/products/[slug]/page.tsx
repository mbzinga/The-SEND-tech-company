import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { Button } from '@/components/Button';
import { ProductImage } from '@/components/ProductImage';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const metaDescription = product.metaDescription || product.description;
  const keywords = [];
  
  // Add product-specific keywords
  if (product.slug === 'sen-ai') {
    keywords.push('SEN-AI', 'AI curriculum', 'SENCO tools', 'graduated response', 'intervention planning', 'personalised curriculum');
  } else if (product.slug === 'lighthouse') {
    keywords.push('SEND consultancy', 'SEND training', 'inclusive systems', 'school support');
  } else if (product.slug === 'leif') {
    keywords.push('parent app', 'child support', 'family guidance', 'parent strategies');
  }

  return {
    title: `${product.name} - The Send Tech Company`,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: `${product.name} - The Send Tech Company`,
      description: product.tagline,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - The Send Tech Company`,
      description: product.tagline,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = product.appStore ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.metaDescription || product.description,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "1"
    },
    "provider": {
      "@type": "Organization",
      "name": "The Send Tech Company",
      "url": "https://sendtechcompany.com"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.name,
    "description": product.metaDescription || product.description,
    "provider": {
      "@type": "Organization",
      "name": "The Send Tech Company",
      "url": "https://sendtechcompany.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "serviceType": "Educational Consultancy",
    "audience": {
      "@type": "Audience",
      "audienceType": "Schools, Educational Organisations, Parents"
    }
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-primary-600 font-medium mb-6">
                {product.tagline}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {product.website && (
                  <Button href={product.website} size="lg">
                    Visit Website
                  </Button>
                )}
                {product.appStore && (
                  <Button href={product.appStore} variant="outline" size="lg">
                    Download App
                  </Button>
                )}
              </div>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <ProductImage 
                src={product.image}
                alt={`${product.name} product image`}
                productName={product.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes {product.name} the perfect solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of educators and families who are already using {product.name} 
            to create more inclusive learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {product.website && (
              <Button href={product.website} size="lg">
                Get Started
              </Button>
            )}
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

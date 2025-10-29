import { Metadata } from 'next';
import { BentoProducts } from '@/components/BentoProducts';

export const metadata: Metadata = {
  title: 'Our Products - The SEND Tech Company',
  description: 'Discover our suite of technology solutions for inclusive education: SEN-AI, Lighthouse Consultancy, and Leif.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-primary-600 font-medium mb-4">
            Technology for Inclusive Education
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The SEND Tech Company builds powerful, accessible tools that help schools, families, and professionals support every child to thrive.
          </p>
        </div>
      </section>

      {/* Products Grid - Bento Layout */}
      <BentoProducts />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform inclusive education?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of educators and families who are already using our solutions 
            to create more inclusive learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


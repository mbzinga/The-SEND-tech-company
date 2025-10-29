import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - The Send Tech Company',
  description: 'Learn about The Send Tech Company\'s mission to provide technology solutions for inclusive education.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About The Send Tech Company
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pioneering technology solutions for inclusive education
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To bridge the gap between technology and inclusive education by developing 
                innovative solutions that empower educators, support families, and create 
                accessible learning environments for children with additional needs.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every child deserves access to quality education tailored 
                to their unique learning requirements, and technology should be the enabler, 
                not the barrier.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading provider of inclusive education technology, creating 
                a world where every child can thrive in their learning journey regardless 
                of their individual challenges or needs.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where technology seamlessly integrates with educational 
                practices to create truly inclusive learning environments that celebrate 
                diversity and promote equal opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                Every solution we create is designed with accessibility and inclusion at its core.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously push boundaries to develop cutting-edge educational technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with educators, families, and experts to create meaningful solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we deliver to our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 mb-6">
              The Send Tech Company was founded with a simple yet powerful vision: to harness 
              the potential of technology to create more inclusive educational experiences. 
              Our journey began when our founders recognised the challenges faced by educators 
              and families in supporting children with additional needs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Through extensive research, collaboration with educational professionals, 
              and deep understanding of the needs of children with special educational needs, 
              we developed our first product, SEN-AI. This AI powered platform is now helping 
              schools in the UK to create personalised learning experiences for all learners.
            </p>
            <p className="text-lg text-gray-600">
              Today, we continue to expand our portfolio with Lighthouse Consultancy and Leif, 
              each designed to address specific challenges in inclusive education. Our commitment 
              remains unwavering: to create technology that truly serves the needs of all learners.
            </p>
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Company Information
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Registered Details</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Company Name:</strong> The Send Tech Company Limited</p>
                  <p><strong>Registration Number:</strong> 16756429</p>
                  <p><strong>Registered Address:</strong><br />
                    167-169 Great Portland Street<br />
                    5th Floor<br />
                    London<br />
                    W1W 5PF
                  </p>
                  <p><strong>Country of Registration:</strong> United Kingdom</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> hello@sendtechcompany.com</p>
                  <p><strong>Website:</strong> sendtechcompany.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


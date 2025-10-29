import { Metadata } from 'next';
import Link from 'next/link';
import { legalDocuments } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Legal Documents - Send Tech Company',
  description: 'Access our legal documents including Terms & Conditions, Privacy Policy, GDPR compliance, and Cookie Policy.',
};

export default function LegalPage() {
  return (
    <div className="bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Legal Documents
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive legal documentation to understand our policies, 
              terms, and commitment to data protection and privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalDocuments.map((doc) => (
              <Link
                key={doc.slug}
                href={`/legal/${doc.slug}`}
                className="block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doc.title}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4">
                  {doc.description}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions about our legal policies?
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our legal documents or need clarification 
              on any of our policies, please don't hesitate to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Contact our legal team
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { legalDocuments } from '@/data/legal';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

interface LegalDocumentPageProps {
  params: {
    document: string;
  };
}

export async function generateStaticParams() {
  return legalDocuments.map((doc) => ({
    document: doc.slug,
  }));
}

export async function generateMetadata({ params }: LegalDocumentPageProps): Promise<Metadata> {
  const doc = legalDocuments.find((d) => d.slug === params.document);
  
  if (!doc) {
    return {
      title: 'Document Not Found',
    };
  }

  return {
    title: `${doc.title} - The SEND Tech Company`,
    description: doc.description,
  };
}

// React components for simple legal pages
const GDPRContent = () => (
  <div className="prose prose-lg max-w-none">
    <h2>GDPR Compliance</h2>
    <p>
      The SEND Tech Company is committed to protecting your privacy and ensuring compliance 
      with the General Data Protection Regulation (GDPR). This document outlines our 
      approach to data protection and your rights under GDPR.
    </p>
    
    <h3>Data Controller</h3>
    <p>
      The SEND Tech Company acts as the data controller for personal data collected through 
      our services. We are responsible for determining the purposes and means of processing 
      your personal data.
    </p>
    
    <h3>Your Rights</h3>
    <p>Under GDPR, you have the following rights regarding your personal data:</p>
    <ul>
      <li><strong>Right of Access:</strong> You can request a copy of your personal data</li>
      <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
      <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
      <li><strong>Right to Restrict Processing:</strong> You can request limitation of processing</li>
      <li><strong>Right to Data Portability:</strong> You can request transfer of your data</li>
      <li><strong>Right to Object:</strong> You can object to processing of your data</li>
    </ul>
    
    <h3>Data Security</h3>
    <p>
      We implement appropriate technical and organizational measures to protect your 
      personal data against unauthorized access, alteration, disclosure, or destruction.
    </p>
    
    <h3>Contact</h3>
    <p>
      If you have any questions about our GDPR compliance or wish to exercise your rights, 
      please contact us at <a href="/contact">our contact page</a>.
    </p>
  </div>
);

const CookiePolicyContent = () => (
  <div className="prose prose-lg max-w-none">
    <h2>Cookie Policy</h2>
    <p>
      This Cookie Policy explains how The SEND Tech Company uses cookies and similar 
      technologies when you visit our website.
    </p>
    
    <h3>What are Cookies?</h3>
    <p>
      Cookies are small text files that are placed on your device when you visit a website. 
      They help us provide you with a better experience by remembering your preferences 
      and enabling certain functionality.
    </p>
    
    <h3>Types of Cookies We Use</h3>
    
    <h4>Essential Cookies</h4>
    <p>
      These cookies are necessary for the website to function properly. They enable basic 
      functions like page navigation and access to secure areas of the website.
    </p>
    
    <h4>Analytics Cookies</h4>
    <p>
      We use analytics cookies to understand how visitors interact with our website. 
      This helps us improve our website's performance and user experience.
    </p>
    
    <h4>Functional Cookies</h4>
    <p>
      These cookies enable enhanced functionality and personalization, such as remembering 
      your preferences and settings.
    </p>
    
    <h3>Managing Cookies</h3>
    <p>
      You can control and manage cookies through your browser settings. Most browsers 
      allow you to refuse or accept cookies, and delete existing cookies.
    </p>
    
    <h3>Third-Party Cookies</h3>
    <p>
      Some cookies on our website are set by third-party services. We do not control 
      these cookies and recommend reviewing the privacy policies of these third parties.
    </p>
  </div>
);

export default function LegalDocumentPage({ params }: LegalDocumentPageProps) {
  const doc = legalDocuments.find((d) => d.slug === params.document);

  if (!doc) {
    notFound();
  }

  let content: React.ReactNode = null;

  if (doc.type === 'markdown') {
    try {
      const filePath = path.join(process.cwd(), 'content', 'legal', `${doc.slug}.md`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      content = (
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{fileContent}</ReactMarkdown>
        </div>
      );
    } catch (error) {
      // Fallback content if markdown file doesn't exist
      content = (
        <div className="prose prose-lg max-w-none">
          <p>This document is currently being updated. Please check back soon.</p>
        </div>
      );
    }
  } else if (doc.type === 'react') {
    if (doc.slug === 'gdpr') {
      content = <GDPRContent />;
    } else if (doc.slug === 'cookies') {
      content = <CookiePolicyContent />;
    }
  }

  return (
    <div className="bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {doc.title}
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            {content}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="/legal"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Legal Documents
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


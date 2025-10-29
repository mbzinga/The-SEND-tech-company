import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Send Tech Company</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Technology for Inclusive Education.
            </p>
            <p className="text-gray-500 text-xs mb-2">
              © 2025 Send Tech Company. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Company Number: 16756429 | 167-169 Great Portland Street, 5th Floor, London W1W 5PF
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/gdpr" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


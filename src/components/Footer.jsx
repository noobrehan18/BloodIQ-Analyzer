import React from 'react';
import { FileText, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">BloodIQ Analyzer</span>
            </div>
            <p className="text-gray-400">
              Transform your medical report processing with AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-yellow-400">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-yellow-400">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-yellow-400">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FileText className="h-5 w-5 mr-2" />
                support@BloodIQ.Analyzer
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91 (800) 123-4567
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} MediParser Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

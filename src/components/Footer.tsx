"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center">
            <Image 
              src="/foremost logo.webp" 
              alt="Foremost Leads Logo" 
              width={300} 
              height={80} 
              className="h-24 md:h-28 w-auto object-contain -ml-2"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed -mt-4">
            Predictable growth engine for businesses, brands, coaches, and digital companies. ROI-focused lead generation and scalable marketing systems.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors text-gray-400">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors text-gray-400">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading mb-2">Quick Links</h4>
          <Link href="/" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> About Us
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Services
          </Link>
          <Link href="/case-studies" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Case Studies
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Contact
          </Link>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading mb-2">Services</h4>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Lead Generation
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Meta Ads
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Google Ads
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> CRM Automation
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
            <ArrowRight size={14} /> Funnels
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading mb-2">Get In Touch</h4>
          <p className="text-gray-400 text-sm">
            Ready to scale? Contact us for a free strategy session and discover how we can grow your business.
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            <p><strong className="text-white">Email:</strong> connect@foremostleads.in</p>
            <p><strong className="text-white">Phone:</strong> +91 - 6350291420</p>
            <p><strong className="text-white">Address:</strong> IT Park, Sitapura, Jaipur</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Foremost Leads. All rights reserved.</p>
      </div>
    </footer>
  );
}

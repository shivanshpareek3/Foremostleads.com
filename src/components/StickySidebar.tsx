"use client";

import { MessageCircle, Mail, PhoneCall } from "lucide-react";

export default function StickySidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex flex-col gap-2 p-2">
      <a 
        href="https://wa.me/916350291420" 
        target="_blank" 
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-l-xl shadow-lg border border-gray-100 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300"
      >
        <MessageCircle size={24} />
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      <a 
        href="mailto:connect@foremostleads.in" 
        className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-l-xl shadow-lg border border-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
      >
        <Mail size={24} />
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Send Email
        </span>
      </a>

      <a 
        href="tel:+916350291420" 
        className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-l-xl shadow-lg border border-gray-100 text-[#175F30] hover:bg-[#175F30] hover:text-white transition-colors duration-300"
      >
        <PhoneCall size={24} />
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
}

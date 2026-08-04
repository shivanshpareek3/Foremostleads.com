"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Meta", src: "https://cdn.simpleicons.org/meta/0467DF" },
  { name: "Google", src: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "HubSpot", src: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/95BF47" },
];

export default function TrustLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-10 bg-white border-b border-gray-100 overflow-hidden relative z-10">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      
      <div className="max-w-[2000px] mx-auto text-center relative">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-10">
          Trusted by fast-growing companies worldwide
        </p>
        
        <div className="flex overflow-hidden relative w-full">
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 font-bold text-2xl transition-all duration-500 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 cursor-default"
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="w-9 h-9 object-contain"
                />
                <span className="text-gray-800">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

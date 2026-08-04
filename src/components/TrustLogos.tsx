"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Meta", src: "/logos/meta.svg", width: 140 },
  { name: "Google", src: "/logos/google.svg", width: 110 },
  { name: "HubSpot", src: "/logos/hubspot.svg", width: 120 },
  { name: "Salesforce", src: "/logos/salesforce.svg", width: 100 },
  { name: "WordPress", src: "/logos/wordpress.svg", width: 160 },
  { name: "Shopify", src: "/logos/shopify.svg", width: 120 },
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
                className="flex items-center justify-center cursor-default h-12 transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  style={{ width: logo.width }}
                  className="h-auto max-h-12 object-contain block"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

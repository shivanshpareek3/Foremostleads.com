"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white font-sans relative">
      
      {/* Dark Premium Hero Section */}
      <section className="relative w-full min-h-[60vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#0a1f11] z-0" />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0,transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
            Premium Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            Data-Driven <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Marketing Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            End-to-end strategies to generate high-intent leads, automate conversions, and scale your revenue predictably.
          </motion.p>
        </div>
      </section>

      {/* Main Services Component */}
      {/* We add a negative margin to pull the white section up over the dark hero, creating a sleek overlap effect */}
      <div className="-mt-10 relative z-20 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <Services />
      </div>

      {/* Premium CTA Banner */}
      <section className="w-full px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,95,48,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f11] via-[#175F30] to-[#22c55e] z-0" />
          
          {/* Background image overlay with blend mode */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-left">
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                Not sure which service is right for you?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Let's sit down for a free strategy call. We'll analyze your current setup and map out the perfect solution to hit your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#175F30] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl group"
                >
                  Book Free Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Features List */}
            <div className="w-full md:w-auto bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <ul className="space-y-6">
                {[
                  "Data-Driven Strategies", 
                  "ROI-Focused Campaigns", 
                  "Transparent Reporting", 
                  "Dedicated Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium text-lg">
                    <CheckCircle2 className="text-[#22c55e] shrink-0" size={24} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

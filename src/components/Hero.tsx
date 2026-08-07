"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Enhanced text animation component
const FadeUpText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Video - highly optimized */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        style={{ willChange: "transform" }}
      >
        <source src="https://technoderivation.com/video/vd3.mp4" type="video/mp4" />
      </video>
      
      {/* Simple gradients for text readability - reduced opacity so video shines through */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-0 pointer-events-none" />

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase backdrop-blur-md"
        >
          <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
          Performance Marketing That Delivers
        </motion.div>
        
        <h1 className="w-full mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading">
          <FadeUpText text="Predictable Growth." delay={0.2} />
          <br />
          <span className="inline-block mt-2">
            <FadeUpText text="Powered by " delay={0.4} />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac] inline-block pb-1"
              style={{ textShadow: "0 0 30px rgba(34,197,94,0.3)" }}
            >
              Performance.
            </motion.span>
          </span>
        </h1>
        
        <p className="w-full max-w-[600px] mb-12 text-base sm:text-lg leading-relaxed text-gray-300 font-sans mx-auto">
          <FadeUpText text="We help businesses generate high-quality leads, increase sales and scale profitably with data-driven marketing, funnels and automation." delay={0.8} />
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link 
            href="/contact"
            className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-sm sm:text-[15px] font-bold text-black rounded-xl bg-gradient-to-r from-[#22c55e] to-[#86efac] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight size={18} />
          </Link>
          
          <Link 
            href="/case-studies"
            className="flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 text-sm sm:text-[15px] font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            View Case Studies
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

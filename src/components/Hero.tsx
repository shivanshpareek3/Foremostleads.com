"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Optimized Typewriter effect component to prevent stuttering
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] pt-28 pb-16 flex items-center overflow-hidden bg-black">
      
      {/* Background Video - highly optimized */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        style={{ willChange: "transform" }}
      >
        <source src="https://technoderivation.com/video/vd3.mp4" type="video/mp4" />
      </video>
      
      {/* Simple gradients for text readability - reduced opacity so video shines through */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-6 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase"
          >
            <Sparkles size={14} className="text-[#22c55e]" />
            Performance Marketing That Delivers
          </motion.div>
          
          <h1 className="w-full mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.15] tracking-tight text-white font-heading">
            <TypewriterText text="Predictable Growth." delay={0.1} />
            <br className="hidden sm:block" />
            <span className="inline-block mt-1 sm:mt-2">
              <TypewriterText text="Powered by " delay={0.4} />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac] inline-block pb-1"
              >
                Performance.
              </motion.span>
            </span>
          </h1>
          
          <p className="w-full max-w-[500px] mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-gray-300 font-sans mx-auto lg:mx-0">
            <TypewriterText text="We help businesses generate high-quality leads, increase sales and scale profitably with data-driven marketing, funnels and automation." delay={0.9} />
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold text-black rounded-xl bg-gradient-to-r from-[#22c55e] to-[#86efac] hover:opacity-90 transition-opacity"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/case-studies"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Single High-Quality Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Subtle glow (optimized out blur if causing lag, using simple radial gradient) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#22c55e]/20 blur-[80px] rounded-full z-0" style={{ willChange: "transform" }} />
          
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Performance Marketing Dashboard" 
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-cover"
              loading="eager"
            />
            {/* Simple floating shapes (optimized) */}
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://ik.imagekit.io/shubhdev/images/shapes/img1.png" 
              alt="shape" 
              className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-16 sm:w-24 opacity-80 z-[-1]"
            />
            <motion.img 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="https://ik.imagekit.io/shubhdev/images/shapes/img3.png" 
              alt="shape" 
              className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-12 sm:w-20 opacity-80 z-[-1]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

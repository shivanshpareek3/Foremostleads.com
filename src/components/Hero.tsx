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
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase"
          >
            <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
            Performance Marketing That Delivers
          </motion.div>
          
          <h1 className="w-full mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.15] tracking-tight text-white font-heading">
            <FadeUpText text="Predictable Growth." delay={0.2} />
            <br className="hidden sm:block" />
            <span className="inline-block mt-1 sm:mt-2">
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
          
          <p className="w-full max-w-[500px] mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-gray-300 font-sans mx-auto lg:mx-0">
            <FadeUpText text="We help businesses generate high-quality leads, increase sales and scale profitably with data-driven marketing, funnels and automation." delay={0.8} />
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold text-black rounded-xl bg-gradient-to-r from-[#22c55e] to-[#86efac] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(34,197,94,0.3)]"
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

        {/* Right Content - Glowing Circular Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Animated Glow Behind Logo */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-[#175F30]/40 to-[#22c55e]/40 blur-[50px] rounded-full z-0" 
          />
          
          <motion.div 
            animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(34,197,94,0.2),_inset_0_0_20px_rgba(255,255,255,0.1)] mx-auto lg:ml-auto lg:mr-10 overflow-hidden group"
          >
            {/* Spinning gradient border effect */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,197,94,0.8)_360deg)] animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-[2px] rounded-full bg-black/40 backdrop-blur-3xl z-10" />

            <img 
              src="/foremost logo.webp" 
              alt="Foremost Leads" 
              className="relative z-20 w-[75%] h-auto object-contain filter brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500"
              loading="eager"
            />
          </motion.div>

          {/* Simple floating shapes (optimized) */}
          <motion.img 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://ik.imagekit.io/shubhdev/images/shapes/img1.png" 
            alt="shape" 
            className="absolute top-0 lg:top-10 left-10 lg:left-20 w-16 sm:w-20 opacity-60 z-0"
          />
          <motion.img 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="https://ik.imagekit.io/shubhdev/images/shapes/img3.png" 
            alt="shape" 
            className="absolute bottom-0 lg:bottom-10 right-10 lg:right-20 w-12 sm:w-16 opacity-60 z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

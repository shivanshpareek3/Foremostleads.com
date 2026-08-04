"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroSlider from "./HeroSlider";

// Typewriter effect component for text
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
        hidden: {},
      }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 5 },
          }}
          transition={{ duration: 0.1 }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="https://technoderivation.com/video/vd3.mp4" type="video/mp4" />
      </video>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.1)] uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e]" />
            Performance Marketing That Delivers
          </motion.div>
          
          <h1 className="max-w-xl mb-6 text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white font-heading flex flex-col">
            <TypewriterText text="Predictable Growth." delay={0.2} />
            <div className="flex items-center gap-3">
              <TypewriterText text="Powered by" delay={1.0} />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5, type: "spring", bounce: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac] inline-block pb-2"
              >
                Performance.
              </motion.span>
            </div>
          </h1>
          
          <p className="max-w-lg mb-10 text-[17px] leading-relaxed text-gray-300 font-sans">
            <TypewriterText text="We help businesses generate high-quality leads, increase sales and scale profitably with data-driven marketing, funnels and automation." delay={1.8} />
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link 
              href="/contact"
              className="group relative flex items-center gap-2 px-8 py-4 text-[15px] font-bold text-black rounded-xl bg-gradient-to-r from-[#22c55e] to-[#86efac] shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Free Strategy Call</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="group flex items-center gap-2 px-8 py-4 text-[15px] font-bold transition-all bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 hover:shadow-lg hover:border-white/40"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end"
        >
          {/* Subtle glow behind the slider */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#22c55e]/20 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10 w-full">
            <HeroSlider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

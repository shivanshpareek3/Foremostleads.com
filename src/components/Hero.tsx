"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

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
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-[#175F30]/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#22c55e]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#175F30]/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#175F30] bg-white border border-[#22c55e]/20 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.1)] uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e]" />
            Performance Marketing That Delivers
          </motion.div>
          
          <h1 className="max-w-[700px] mb-6 text-[50px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-foreground font-heading flex flex-col">
            <TypewriterText text="Predictable Growth." delay={0.2} />
            <div className="flex items-center gap-3">
              <TypewriterText text="Powered by" delay={1.0} />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5, type: "spring", bounce: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e] inline-block pb-2"
              >
                Performance.
              </motion.span>
            </div>
          </h1>
          
          <p className="max-w-[500px] mb-12 text-[18px] md:text-[20px] leading-relaxed text-gray-500 font-sans">
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
              className="group relative flex items-center gap-2 px-8 py-4 text-[15px] font-bold text-white rounded-xl bg-gradient-to-r from-[#175F30] to-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Free Strategy Call</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="group flex items-center gap-2 px-8 py-4 text-[15px] font-bold transition-all bg-white/50 backdrop-blur-md border border-gray-200/60 rounded-xl text-foreground hover:bg-white hover:shadow-lg hover:border-gray-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Original Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-lg mx-auto lg:ml-auto"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Revenue Generated</h3>
            <div className="text-3xl font-bold font-heading text-foreground mb-1">₹3,87,45,231</div>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#175F30] mb-8">
              <TrendingUp size={14} />
              <span>+32.5% vs last 30 days</span>
            </div>

            {/* Faux Graph Line */}
            <div className="w-full h-32 mb-8 relative">
              <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <path d="M0,80 L40,70 L80,75 L120,50 L160,55 L200,30 L240,45 L280,20 L320,35 L360,10 L400,15" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0,80 L40,70 L80,75 L120,50 L160,55 L200,30 L240,45 L280,20 L320,35 L360,10 L400,15 L400,100 L0,100 Z" fill="url(#gradient)" opacity="0.1"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1">Leads Generated</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">12,543</span>
                  <span className="text-xs font-semibold text-[#175F30]">+20.8%</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 mb-1">ROAS</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">4.8x</span>
                  <span className="text-xs font-semibold text-[#175F30]">+18.7%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

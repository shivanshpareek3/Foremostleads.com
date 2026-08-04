"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Gradients */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-[#175F30]/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#22c55e]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#175F30]/5 blur-[150px]" />
        
        {/* Abstract Network Lines */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        
        {/* Animated Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-t from-[#175F30] to-[#22c55e] blur-sm"
            style={{
              width: 10 + Math.random() * 20 + "px",
              height: 10 + Math.random() * 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
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
            AI + Performance Marketing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="max-w-[700px] mb-8 text-[56px] md:text-[72px] lg:text-[84px] font-bold leading-[1.05] tracking-tight text-foreground font-heading"
          >
            Predictable Growth.<br/>
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e] inline-block pb-2">AI.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="max-w-[500px] mb-12 text-[18px] md:text-[20px] leading-relaxed text-gray-500 font-sans"
          >
            We help ambitious businesses scale profitably through data-driven lead generation, advanced funnels, and automated growth systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link 
              href="/contact"
              className="group relative flex items-center gap-2 px-8 py-4 text-[15px] font-bold text-white rounded-xl bg-gradient-to-r from-[#175F30] to-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Start Scaling Now</span>
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

        {/* Right Content - 3D Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#175F30]/10 to-[#22c55e]/10 blur-[100px] rounded-full" />
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}

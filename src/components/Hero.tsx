"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 text-[11px] font-semibold tracking-wider text-[#175F30] bg-[#eef7f1] rounded-full uppercase"
          >
            Performance Marketing That Delivers
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl mb-6 text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-foreground font-heading"
          >
            Predictable Growth.<br/>
            Powered by <span className="text-[#175F30]">Performance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg mb-10 text-[17px] leading-relaxed text-gray-500 font-sans"
          >
            We help businesses generate high-quality leads, increase sales and scale profitably with data-driven marketing, funnels and automation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="/contact"
              className="px-6 py-3.5 text-sm font-semibold text-white transition-colors rounded-md bg-[#175F30] hover:bg-brand-hover shadow-sm"
            >
              Book Free Strategy Call
            </Link>
            <Link 
              href="/case-studies"
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-colors bg-white border border-gray-200 rounded-md text-foreground hover:bg-gray-50"
            >
              View Case Studies <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
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

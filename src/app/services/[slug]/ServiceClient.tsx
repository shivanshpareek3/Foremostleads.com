"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { serviceContent } from "./data";

export default function ServiceClient({ slug }: { slug: string }) {
  const content = serviceContent[slug as keyof typeof serviceContent];

  if (!content) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#fcfdfc] font-sans relative">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.heroImage} 
            alt={content.title} 
            className="w-full h-full object-cover opacity-40 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#0a1f11]" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0,transparent_50%)] z-0" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
            Premium Service
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            {content.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      {/* The Deep Dive Layout */}
      <section className="-mt-16 relative z-20 w-full max-w-[1400px] mx-auto px-6 mb-32">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col lg:flex-row items-stretch">
          
          {/* Huge Realistic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]"
          >
            <img 
              src={content.heroImage} 
              alt={content.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Frosted Glass Content Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white"
          >
            <div className="w-16 h-16 bg-[#eef7f1] text-[#175F30] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              {content.overviewTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
              {content.overviewText}
            </p>
            
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#175F30] text-white font-bold rounded-xl hover:bg-[#22c55e] hover:scale-105 transition-all shadow-xl group w-fit"
            >
              Start Growing Today <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Benefits Bento Grid */}
      <section className="w-full bg-[#eef7f1] py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">Approach Wins</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)] border border-transparent hover:border-[#22c55e]/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#fcfdfc] border border-gray-100 text-[#175F30] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">{benefit.title}</h4>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="w-full px-6 py-20 bg-[#fcfdfc]">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,95,48,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11] to-[#175F30] z-0" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Ready to dominate your market?
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                Let's map out exactly how {content.title} will generate massive ROI for your business.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#1ea951] hover:scale-105 transition-all shadow-xl group shrink-0"
            >
              Book Free Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

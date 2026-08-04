"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const metrics = [
    { label: "Client satisfaction", percentage: 88 },
    { label: "Campaign success", percentage: 92 },
    { label: "Lead Quality Score", percentage: 95 },
    { label: "Retention rate", percentage: 80 },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Content & Metrics */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-4"
          >
            <span className="text-[#22c55e] text-lg">*</span>
            Why Choose Us
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight mb-6"
          >
            Proven result backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">real data growth</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed mb-10"
          >
            We combine strategy, creativity, and technology to deliver measurable results. Our approach ensures your business grows consistently and stays ahead of the competition in the ever-changing digital landscape.
          </motion.p>

          <div className="w-full flex flex-col gap-8 mb-10">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{metric.label}</span>
                  <span className="font-bold text-[#175F30]">{metric.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#175F30] to-[#22c55e] rounded-full relative"
                  >
                    {/* Shimmer effect inside progress bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-white/20 blur-sm transform -skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 bg-[#175F30] hover:bg-[#175F30]/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 group shadow-lg shadow-[#175F30]/20"
          >
            Work with us 
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Right Side: Realistic Imagery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional team discussing marketing data" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center gap-5 w-64"
          >
            <div className="w-14 h-14 bg-[#eef7f1] text-[#22c55e] rounded-full flex items-center justify-center shrink-0">
              <Users size={28} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 leading-tight">150+</h4>
              <p className="text-sm font-semibold text-gray-500 leading-tight">Clients<br />Positive Reviews</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

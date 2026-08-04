"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Custom 3D Tilt Card Component
const TiltCard = ({ title, subtitle, value, description }: { title: string; subtitle: string; value: string; description: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (-10deg to 10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full p-8 rounded-2xl bg-white border border-gray-100 cursor-pointer flex flex-col justify-between group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Dynamic 3D shadow on hover */}
      <div 
        className="absolute inset-0 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.15)] transition-shadow duration-500 z-0 pointer-events-none"
        style={{ transform: "translateZ(-30px)" }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl md:text-5xl font-bold font-heading text-foreground">{value}</span>
          {value.includes('+') || value.includes('%') ? null : <span className="text-4xl md:text-5xl font-bold font-heading text-[#22c55e]">+</span>}
        </div>
        <div className="text-sm font-bold text-gray-900 mb-6">{title}</div>
        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function AboutStats() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eef7f1] rounded-full blur-[100px] opacity-50 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground leading-[1.3] mb-8"
          >
            We are a performance-driven marketing team that helps businesses scale using data-backed funnels, <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">high-intent ads, and conversion-focused strategies.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase"
          >
            <span className="text-[#22c55e] text-lg">*</span>
            Our mission is simple: To build predictable client-acquisition systems that drive revenue, authority, and long-term growth.
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch perspective-[2000px]">
          
          {/* Left Column: Image with Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2369&auto=format&fit=crop" 
              alt="Modern Office" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Floating Glassmorphism Logo Badge */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">
              <img 
                src="/foremost logo.webp" 
                alt="Foremost Leads Logo" 
                className="h-12 sm:h-16 object-contain filter drop-shadow-lg brightness-0 invert" // Make logo white for contrast
              />
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <TiltCard 
                value="5+" 
                title="Years Experience" 
                subtitle="" 
                description="Built, optimized, and scaled performance-driven marketing systems for businesses, brands, and consultants across multiple industries."
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <TiltCard 
                value="250+" 
                title="Funnels & Campaigns" 
                subtitle="" 
                description="Executed high-converting funnels and paid campaigns for service businesses, education brands, and online companies focused on lead generation."
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <TiltCard 
                value="30 Cr+" 
                title="Ad Spend Experience" 
                subtitle="" 
                description="Managed and optimized over ₹30 crores in paid ads across Meta, Google, and YouTube, gaining deep insights into audience behavior and scalable performance."
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <TiltCard 
                value="94%" 
                title="Client Success Rate" 
                subtitle="" 
                description="Our clients achieve consistent lead flow, improved conversions, and long-term growth through systems designed for stability and scale."
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

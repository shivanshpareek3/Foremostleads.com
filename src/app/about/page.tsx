"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Target, Lightbulb, HeartHandshake, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const team = [
    { 
      name: "Arpit Sharma", 
      role: "Founder", 
      image: "/Arpit sharma.png"
    },
    { 
      name: "Yashvardhan Singh", 
      role: "Co-Founder", 
      image: "/yashvardhan singh.png"
    }
  ];

  const coreValues = [
    { icon: Shield, title: "Integrity", desc: "Honesty and full transparency in every campaign we run." },
    { icon: Target, title: "Results-Driven", desc: "We don't care about vanity metrics, we care about your ROI." },
    { icon: Lightbulb, title: "Innovation", desc: "Always testing, always finding the next winning strategy." },
    { icon: HeartHandshake, title: "Client Success", desc: "Your growth is the only KPI that truly matters to us." },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#fcfdfc] font-sans">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image heavily blended */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Agency Team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a1f11]" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0,transparent_50%)] z-0" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
            Who We Are
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            The Minds Behind <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Your Growth
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
          >
            We are a performance marketing & automation agency dedicated to generating high-intent leads and scaling your revenue profitably.
          </motion.p>
        </div>
      </section>

      {/* Glassmorphism Stats Grid (Overlapping Hero) */}
      <section className="-mt-24 relative z-20 w-full max-w-[1400px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "150+", label: "Happy Clients" },
            { value: "20+", label: "Industries Served" },
            { value: "₹9Cr+", label: "Revenue Generated" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 relative z-10">{stat.value}</div>
              <div className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-wider relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Core Showcase (Mission & Vision Bento) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Mission Card - Dark & Cinematic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#0a1f11] rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl border border-gray-900 w-full"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
            
            <h3 className="text-4xl font-bold font-heading text-white mb-6 relative z-10">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed font-light relative z-10">
              To empower businesses with result-driven marketing, intelligent automation, and data-backed strategies that deliver measurable, explosive growth.
            </p>
          </motion.div>

          {/* Vision Card - Glassmorphism Light */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(34,197,94,0.15)] border border-[#22c55e]/20 lg:-ml-16 z-10 relative w-full"
          >
            <h3 className="text-4xl font-bold font-heading text-gray-900 mb-6">Our Vision</h3>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              To be the most trusted growth partner for ambitious businesses worldwide, recognized for redefining industry standards and building long-term, highly profitable relationships.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Interactive Core Values */}
      <section className="w-full bg-[#eef7f1] py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">Core Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">The non-negotiable principles that drive every campaign, every strategy, and every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
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
                  <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Premium Team Showcase */}
      <section className="w-full py-32 bg-[#fcfdfc]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Meet The <span className="text-[#175F30]">Experts</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The strategists, marketers, and automation engineers behind your growth engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden bg-gray-100 aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer"
              >
                {/* Grayscale to Color Image Transition */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                
                {/* Dark Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Floating Content gliding up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold font-heading text-white mb-1">{member.name}</h4>
                  <p className="text-[#22c55e] font-semibold text-sm uppercase tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
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
                Ready to work with the best?
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                Let's sit down for a free strategy call and map out how we can scale your revenue.
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

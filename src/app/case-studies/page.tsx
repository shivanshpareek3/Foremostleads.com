"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users, Target } from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      industry: "Real Estate",
      title: "How We Generated ₹1.2Cr+ Revenue for a Real Estate Company",
      metrics: [
        { label: "Leads Generated", value: "2,345", icon: Users },
        { label: "ROAS", value: "5.6x", icon: Target },
        { label: "Revenue", value: "₹1.2Cr+", icon: TrendingUp },
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      reversed: false,
    },
    {
      industry: "Education & EdTech",
      title: "Scaling an EdTech Business with Paid Ads & Funnels",
      metrics: [
        { label: "Leads Generated", value: "1,856", icon: Users },
        { label: "ROAS", value: "4.3x", icon: Target },
        { label: "Revenue", value: "₹74L+", icon: TrendingUp },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      reversed: true,
    },
    {
      industry: "Healthcare",
      title: "Helping a Dental Clinic Get 3X More Patients",
      metrics: [
        { label: "Leads Generated", value: "1,243", icon: Users },
        { label: "ROAS", value: "6.1x", icon: Target },
        { label: "Revenue", value: "₹38L+", icon: TrendingUp },
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      reversed: false,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#fcfdfc] font-sans relative">
      
      {/* Dark Premium Hero Section */}
      <section className="relative w-full min-h-[60vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#0a1f11] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0,transparent_50%)]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#22c55e] bg-white/5 border border-[#22c55e]/30 rounded-full uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#22c55e] animate-pulse" />
            Impact Showcase
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            Proven Results. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Real Revenue.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            We don't just talk about growth; we deliver it. Explore how we've helped businesses across industries scale profitably.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Impact Showcase */}
      <section className="-mt-10 relative z-20 bg-[#fcfdfc] rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="flex flex-col gap-32">
            {cases.map((c, i) => (
              <div 
                key={i}
                className={`relative flex flex-col ${c.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-0`}
              >
                {/* Background Image Area */}
                <motion.div 
                  initial={{ opacity: 0, x: c.reversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-3/5 relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl group"
                >
                  <img 
                    src={c.image} 
                    alt={c.industry} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating Industry Tag */}
                  <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl">
                    {c.industry}
                  </div>
                </motion.div>

                {/* Overlapping Content (Glassmorphism) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className={`w-full lg:w-1/2 lg:absolute top-1/2 lg:-translate-y-1/2 z-10 ${c.reversed ? 'lg:left-12 xl:left-24' : 'lg:right-12 xl:right-24'}`}
                >
                  <div className="bg-white/90 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-[1.15] mb-12">
                      {c.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-12">
                      {c.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold uppercase text-xs tracking-widest">
                              <Icon size={16} className="text-[#22c55e]" />
                              {metric.label}
                            </div>
                            <div className="text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">
                              {metric.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link 
                      href="#" 
                      className="flex items-center gap-3 text-[#175F30] font-bold text-lg hover:gap-5 transition-all w-fit group"
                    >
                      Read Full Case Study <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="w-full px-6 py-16 bg-[#fcfdfc]">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,95,48,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11] to-[#175F30] z-0" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Be Our Next Success Story
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                Ready to see these kinds of numbers for your own business? Let's map out your growth strategy.
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

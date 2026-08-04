"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Stethoscope, GraduationCap, ShoppingCart, Presentation, Plane, Landmark, Cloud, ArrowRight, Sparkles } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    { 
      icon: Building2, 
      title: "Real Estate", 
      desc: "Generate high-quality leads and close more deals.", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      sizeClass: "md:col-span-2 md:row-span-2" 
    },
    { 
      icon: Stethoscope, 
      title: "Healthcare", 
      desc: "Grow your clinic and get more patients.", 
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      sizeClass: "md:col-span-1 md:row-span-1" 
    },
    { 
      icon: GraduationCap, 
      title: "Education", 
      desc: "Increase admissions and student enrollments.", 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      sizeClass: "md:col-span-1 md:row-span-1" 
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce", 
      desc: "Boost sales and grow your online store rapidly.", 
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      sizeClass: "md:col-span-2 md:row-span-1" 
    },
    { 
      icon: Presentation, 
      title: "Coaching", 
      desc: "Attract more students and grow your business.", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      sizeClass: "md:col-span-1 md:row-span-2" 
    },
    { 
      icon: Plane, 
      title: "Travel", 
      desc: "Get more bookings and increase revenue.", 
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      sizeClass: "md:col-span-1 md:row-span-1" 
    },
    { 
      icon: Landmark, 
      title: "Finance", 
      desc: "Generate leads for loans & financial services.", 
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      sizeClass: "md:col-span-2 md:row-span-1" 
    },
    { 
      icon: Cloud, 
      title: "SaaS", 
      desc: "Scale your SaaS business with paid ads & funnels.", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      sizeClass: "md:col-span-3 md:row-span-1" 
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
            Specialized Expertise
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            Industries We <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Transform
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            We don't just run ads; we build predictable growth engines tailored specifically to the unique challenges of your industry.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="-mt-10 relative z-20 bg-[#fcfdfc] rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#22c55e]/20 transition-all duration-500 cursor-pointer ${ind.sizeClass}`}
                >
                  {/* Background Image */}
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#22c55e]/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />

                  {/* Content (Glassmorphism Panel) */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                      <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-500">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-white mb-2">{ind.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="w-full px-6 py-16 bg-[#fcfdfc]">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,95,48,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11] to-[#175F30] z-0" />
          
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Don't see your industry?
              </h3>
              <p className="text-white/80 text-lg max-w-xl">
                We work with businesses from all industries. Let's discuss how we can tailor a growth engine specifically for you.
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

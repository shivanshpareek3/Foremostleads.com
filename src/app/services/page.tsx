"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Target, BarChart, Settings, PenTool, LayoutTemplate, Video, Mic, Megaphone, UserCircle } from "lucide-react";

export default function ServicesPage() {
  const allServices = [
    {
      title: "Lead Generation",
      description: "Acquire high-intent leads through Meta Ads, Google Ads, YouTube Ads, and advanced targeting systems.",
      features: ["High-intent targeting", "Conversion-focused ads"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: Target,
    },
    {
      title: "Sales Funnels",
      description: "We build persuasive, high-converting landing pages and complete funnel systems that guide prospects from click to booking.",
      features: ["Webinar & booking funnels", "Conversion-driven flow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      icon: BarChart,
    },
    {
      title: "Automations",
      description: "Automate your marketing and customer touchpoints using email, SMS, WhatsApp, and internal workflows to scale conversions.",
      features: ["Lead nurturing systems", "Show-up & follow-ups"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      icon: Settings,
    },
    {
      title: "Content & Copywriting",
      description: "We provide you with all the content from ad scripts, VSL scripts and PPTs for presentations, perfectly aligned with your brand.",
      features: ["Webinar scripts & decks", "Ad & funnel copy"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      icon: PenTool,
    },
    {
      title: "Website & LMS",
      description: "Create high-quality websites, landing pages, and LMS platforms built for performance, speed, and conversions.",
      features: ["Funnel-ready pages", "Speed optimized"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      icon: LayoutTemplate,
    },
    {
      title: "Video Editing",
      description: "High-quality video editing for ads, marketing campaigns, webinars, and social media content designed to capture attention.",
      features: ["Ad Creatives", "Long form VSL Videos"],
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
      icon: Video,
    },
    {
      title: "Sales Training",
      description: "We create conversion-focused content and provide comprehensive pitch flow training aligned with your sales goals.",
      features: ["Webinar pitch flow", "Closing tactics"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      icon: Mic,
    },
    {
      title: "Digital PR",
      description: "Build and protect your online image with strategic PR campaigns and proactive brand reputation management.",
      features: ["Media placements", "Authority building"],
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
      icon: Megaphone,
    },
    {
      title: "Personal Branding",
      description: "Establish yourself as an industry leader with targeted personal branding and powerful social presence strategies.",
      features: ["Profile optimization", "Thought leadership"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
      icon: UserCircle,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white font-sans relative">
      
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
            Full Spectrum Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            Data-Driven <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Marketing Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            Explore our complete suite of end-to-end strategies designed to generate leads, automate conversions, and scale your revenue.
          </motion.p>
        </div>
      </section>

      {/* Cinematic Grid Section */}
      <section className="-mt-10 relative z-20 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Everything You Need to <span className="text-[#175F30]">Scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Deep Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 transition-opacity duration-500 group-hover:bg-black/80" />

                  {/* Top Content (Always Visible) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-[#22c55e] group-hover:border-[#22c55e]">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Hover Content (Revealed on Hover) */}
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-white font-medium text-sm">
                            <CheckCircle2 className="text-[#22c55e] shrink-0" size={18} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="w-full px-6 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,95,48,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f11] via-[#175F30] to-[#22c55e] z-0" />
          
          <div className="absolute inset-0 opacity-20 mix-blend-overlay z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-left">
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                Not sure which service is right for you?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Let's sit down for a free strategy call. We'll analyze your current setup and map out the perfect solution to hit your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#175F30] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl group"
                >
                  Book Free Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-auto bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <ul className="space-y-6">
                {[
                  "Data-Driven Strategies", 
                  "ROI-Focused Campaigns", 
                  "Transparent Reporting", 
                  "Dedicated Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium text-lg">
                    <CheckCircle2 className="text-[#22c55e] shrink-0" size={24} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

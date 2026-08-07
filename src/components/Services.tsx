"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const coreServices = [
    {
      title: "Lead Generation",
      description: "Acquire high-intent leads through Meta Ads, Google Ads, YouTube Ads, and advanced targeting systems designed for businesses, brands, service providers, and digital companies.",
      features: ["High-intent targeting", "Conversion-focused ads"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Realistic analytics dashboard
      reversed: false,
    },
    {
      title: "Sales Funnels",
      description: "We build persuasive, high-converting landing pages and complete funnel systems that guide prospects from first click to qualified leads, bookings, or sales.",
      features: ["Webinar & booking funnels", "Conversion-driven flow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data analysis / charts
      reversed: true,
    },
    {
      title: "Automations",
      description: "Automate your marketing and customer touchpoints using email, SMS, WhatsApp, outbound calls, and internal workflows to improve conversions and reduce manual effort.",
      features: ["Lead nurturing systems", "Show-up & follow-ups"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Team working / tech
      reversed: false,
    },
    {
      title: "Content & Copywriting",
      description: "We provide you with all the content from ad scripts, VSL scripts and PPTs for presentations, aligned with your brand and goals.",
      features: ["Webinar scripts & decks", "Ad & funnel copy"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop", // Desk with computer and notebook
      reversed: true,
    },
  ];

  const otherServices = [
    {
      title: "Website & LMS Development",
      description: "Create high-quality websites, landing pages, and LMS platforms built for performance, speed, and conversions.",
      features: ["Funnel-ready pages", "Mobile & speed optimized"]
    },
    {
      title: "Video Editing",
      description: "High-quality video editing for ads, marketing campaigns, webinars, and social media content designed to capture attention.",
      features: ["Ad Creatives videos", "Long form VSL Videos"]
    },
    {
      title: "Sales Closing Training",
      description: "We create conversion-focused content and provide comprehensive pitch flow training aligned with your sales goals.",
      features: ["Webinar pitch flow"]
    },
    {
      title: "Digital PR & Brand Reputation",
      description: "Build and protect your online image with strategic PR campaigns and proactive reputation management.",
      features: ["Media placements", "Authority building"]
    },
    {
      title: "Personal Branding",
      description: "Establish yourself as an industry leader with targeted personal branding and social presence strategies.",
      features: ["Profile optimization", "Thought leadership"]
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-4"
          >
            <span className="text-[#22c55e] text-lg">*</span>
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight"
          >
            Smart digital solutions for <span className="text-[#175F30]">business growth</span>
          </motion.h2>
        </div>

        {/* Core Services Alternating Layout */}
        <div className="flex flex-col gap-24 mb-32">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: service.reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: service.reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <h3 className="text-3xl font-bold font-heading mb-6">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10 w-full">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                      <CheckCircle2 className="text-[#22c55e] shrink-0" size={24} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="flex items-center gap-2 bg-[#175F30] hover:bg-[#175F30]/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 group w-fit">
                  Work with us 
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Other Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-gray-100 pt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">Other Services</span>
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            {/* First Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.slice(0, 3).map((service, index) => {
                let Icon = require("lucide-react").ArrowRight;
                if (index === 0) Icon = require("lucide-react").Monitor;
                if (index === 1) Icon = require("lucide-react").Video;
                if (index === 2) Icon = require("lucide-react").Headset;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-[#eef7f1] group-hover:bg-[#22c55e] group-hover:text-white text-[#175F30] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                      <Icon size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold font-heading mb-4 text-gray-900 group-hover:text-[#175F30] transition-colors duration-300">{service.title}</h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="text-[#22c55e] shrink-0" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row: 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
              {otherServices.slice(3, 5).map((service, index) => {
                let Icon = require("lucide-react").ArrowRight;
                if (index === 0) Icon = require("lucide-react").Megaphone;
                if (index === 1) Icon = require("lucide-react").UserCircle;

                return (
                  <motion.div 
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-[#eef7f1] group-hover:bg-[#22c55e] group-hover:text-white text-[#175F30] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                      <Icon size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold font-heading mb-4 text-gray-900 group-hover:text-[#175F30] transition-colors duration-300">{service.title}</h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="text-[#22c55e] shrink-0" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

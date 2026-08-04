"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Target, BarChart, Settings, Zap, Users, ShieldCheck, Mail, LineChart } from "lucide-react";
import { notFound } from "next/navigation";

// Define the content for each service slug
const serviceContent = {
  "lead-generation": {
    title: "Explosive Lead Generation",
    subtitle: "High-intent leads delivered directly to your CRM.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    overviewTitle: "Stop Chasing Leads. Start Closing Deals.",
    overviewText: "We engineer multi-channel lead generation systems that attract high-ticket clients who are actively looking for your solution. No more unqualified tire-kickers. We focus purely on intent and ROI.",
    benefits: [
      { icon: Target, title: "Quality over Quantity", desc: "We filter out bad leads before they ever reach your sales team." },
      { icon: Zap, title: "Omni-Channel Targeting", desc: "We find your perfect audience across Meta, Google, and LinkedIn." },
      { icon: LineChart, title: "Transparent ROI", desc: "Track every single penny spent down to the exact revenue it generated." },
      { icon: Users, title: "Rapid Scaling", desc: "Once we find the winning formula, we scale budgets aggressively but safely." }
    ]
  },
  "meta-ads": {
    title: "High-Converting Meta Ads",
    subtitle: "Dominate Facebook & Instagram with scroll-stopping creatives.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    overviewTitle: "Turn Scrolling into Sales.",
    overviewText: "The algorithm is smart, but the creative is king. We build data-backed Meta Ad campaigns combining psychological hooks, stunning visuals, and advanced machine learning structures to print money.",
    benefits: [
      { icon: BarChart, title: "Advanced Pixel Tracking", desc: "Flawless server-side tracking to feed the algorithm perfect data." },
      { icon: Sparkles, title: "Creative Testing", desc: "Rapid A/B testing of hooks, copy, and videos to find unicorns." },
      { icon: Target, title: "Retargeting Loops", desc: "Stay top-of-mind and convert warm traffic with omnipresent ads." },
      { icon: LineChart, title: "Lower CPA", desc: "Continuous optimization to drop your cost-per-acquisition month over month." }
    ]
  },
  "google-ads": {
    title: "Intent-Driven Google Ads",
    subtitle: "Capture demand the exact moment your customers search.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overviewTitle: "Be There When They Are Ready to Buy.",
    overviewText: "Google Ads isn't about bidding on every keyword. It's about capturing high-intent searchers and aggressively outbidding competitors on the 20% of keywords that drive 80% of your revenue.",
    benefits: [
      { icon: Target, title: "Search Intent Targeting", desc: "We only bid on keywords that signal a strong desire to purchase." },
      { icon: Zap, title: "Performance Max", desc: "Leveraging Google's AI to dominate Search, Display, and YouTube." },
      { icon: ShieldCheck, title: "Competitor Conquesting", desc: "Ethically steal your competitors' traffic when they search for their brand." },
      { icon: BarChart, title: "Conversion Tracking", desc: "Crystal clear data on which keywords actually lead to closed deals." }
    ]
  },
  "crm-automation": {
    title: "Intelligent CRM Automation",
    subtitle: "Turn leads into booked appointments on autopilot.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    overviewTitle: "Never Let Another Lead Fall Through the Cracks.",
    overviewText: "Speed to lead is everything. We build sophisticated CRM workflows that instantly follow up with prospects via SMS, Email, and WhatsApp the second they opt-in, booking them straight onto your calendar.",
    benefits: [
      { icon: Mail, title: "Omni-Channel Sequences", desc: "Automated follow-ups across Email, SMS, and WhatsApp." },
      { icon: Zap, title: "Instant Speed to Lead", desc: "Prospects are contacted within 5 minutes of submitting their info." },
      { icon: ShieldCheck, title: "Lead Scoring", desc: "Automatically identify and prioritize your hottest prospects." },
      { icon: Users, title: "Zero Manual Follow-ups", desc: "Your sales team only talks to people who are pre-qualified and booked." }
    ]
  },
  "funnels": {
    title: "Sales Funnel Engineering",
    subtitle: "Persuasive landing pages that convert clicks into cash.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    overviewTitle: "Your 24/7 Digital Salesman.",
    overviewText: "A bad landing page will burn your ad budget. We engineer high-converting sales funnels, webinar funnels, and VSLs that use proven psychological frameworks to guide prospects seamlessly to the checkout or booking page.",
    benefits: [
      { icon: Sparkles, title: "High-Converting Copy", desc: "Direct-response copywriting that speaks directly to your avatar's pain points." },
      { icon: Settings, title: "A/B Testing", desc: "Relentless split-testing of headlines, buttons, and layouts to maximize conversion rates." },
      { icon: Zap, title: "Lightning Fast Speeds", desc: "Pages optimized for millisecond load times to prevent bounce rates." },
      { icon: LineChart, title: "Webinar Integrations", desc: "Seamless setups for live and automated evergreen webinar funnels." }
    ]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Check if the slug exists in our content map
  const content = serviceContent[params.slug as keyof typeof serviceContent];

  // If not, trigger a 404
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

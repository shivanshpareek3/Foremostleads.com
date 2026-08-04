"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "Marketing", "Ads", "Funnels", "Automation", "Business"];
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const allPosts = [
    { 
      title: "How to Generate High-Quality Leads for Your Business in 2024", 
      category: "Marketing",
      date: "May 21, 2024", 
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    { 
      title: "Meta Ads Strategy That Actually Works (And What Doesn't)", 
      category: "Ads",
      date: "May 19, 2024", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Sales Funnel Optimization: A Complete Masterclass", 
      category: "Funnels",
      date: "May 17, 2024", 
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    { 
      title: "Marketing Automation: Build Systems That Print Money", 
      category: "Automation",
      date: "May 15, 2024", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Scaling Your Agency: Operational Tactics for CEOs", 
      category: "Business",
      date: "May 12, 2024", 
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Google Ads vs Meta Ads: Where Should You Spend First?", 
      category: "Ads",
      date: "May 9, 2024", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Building High-Converting Landing Pages (Step by Step)", 
      category: "Funnels",
      date: "May 5, 2024", 
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
    },
    { 
      title: "Email Sequences That Revive Dead Leads", 
      category: "Automation",
      date: "May 1, 2024", 
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "The Ultimate Guide to B2B Outbound Marketing", 
      category: "Marketing",
      date: "Apr 28, 2024", 
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  // Determine how many posts to show
  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#fcfdfc] font-sans">
      
      {/* Dark Premium Hero Section */}
      <section className="relative w-full min-h-[50vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
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
            Knowledge Base
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-white font-heading mb-6"
          >
            Insights & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">
              Resources
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            Explore our latest strategies, deep dives, and tactical guides to help you scale your business and dominate your market.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="-mt-10 relative z-20 w-full bg-[#fcfdfc] rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] py-20 pb-32">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Interactive Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false); // Reset to showing only 6 when changing categories
                }}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#175F30] text-white border-[#175F30] shadow-lg shadow-[#175F30]/20 scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c55e]/50 hover:text-[#175F30]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {displayedPosts.map((post, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  key={post.title}
                >
                  <Link href="#" className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-[#22c55e]/10 transition-all duration-500 h-full flex flex-col">
                    
                    {/* Image Container with Parallax Hover */}
                    <div className="w-full h-60 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#175F30] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 group-hover:text-[#175F30] transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      
                      <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                          <Clock size={14} className="text-[#22c55e]" /> 
                          {post.readTime}
                        </div>
                        <div className="text-sm font-bold text-gray-400">
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty State Fallback */}
            {displayedPosts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-gray-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500">We are currently writing more content for the {activeCategory} category.</p>
              </motion.div>
            )}
          </div>

          {/* View All Button Toggle */}
          {filteredPosts.length > 6 && (
            <div className="text-center">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#22c55e]/30 text-[#175F30] font-bold rounded-xl hover:bg-[#eef7f1] hover:border-[#22c55e] transition-all group shadow-sm hover:shadow-md"
              >
                {showAll ? "Show Less" : "View All Articles"} 
                <ArrowRight size={18} className={`transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

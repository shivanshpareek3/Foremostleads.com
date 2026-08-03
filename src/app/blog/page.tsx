import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const categories = ["All", "Marketing", "Ads", "Funnels", "Automation", "Business"];
  const posts = [
    { title: "How to Generate High-Quality Leads for Your Business", date: "May 21, 2024", readTime: "5 min read" },
    { title: "Meta Ads Strategy That Actually Works in 2024", date: "May 19, 2024", readTime: "6 min read" },
    { title: "Sales Funnel Optimization: A Complete Guide", date: "May 17, 2024", readTime: "8 min read" },
    { title: "Google Ads vs Meta Ads: Which is Better?", date: "May 15, 2024", readTime: "6 min read" },
    { title: "How to Increase ROI from Your Ad Campaigns", date: "May 12, 2024", readTime: "4 min read" },
    { title: "Marketing Automation: Benefits & Best Practices", date: "May 9, 2024", readTime: "7 min read" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white font-sans pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Insights & Resources</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Latest tips, strategies and insights to grow your business.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-[#175F30] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, i) => (
            <Link href="#" key={i} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 font-semibold text-sm">Image Placeholder</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-heading mb-4 group-hover:text-brand transition-colors line-clamp-2 leading-snug">{post.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link href="#" className="inline-flex items-center gap-2 text-[#175F30] font-bold hover:gap-3 transition-all">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

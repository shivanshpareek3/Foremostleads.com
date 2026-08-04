"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Activity, BarChart3, ChevronRight } from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#175F30]/20 rounded-full blur-[80px]" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-[#22c55e]/20 rounded-full blur-[60px]" />

      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-[90%] max-w-[480px] bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(255,255,255,0.5)_inset] p-6"
        style={{ transformPerspective: 1000 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Total Revenue</h3>
            <div className="text-3xl font-bold font-heading text-foreground">₹4,25,80,000</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#22c55e]/10 text-[#175F30] rounded-full text-xs font-bold">
            <TrendingUp size={14} />
            +42.8%
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-[120px] w-full flex items-end gap-2 mb-8">
          {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className="flex-1 bg-gradient-to-t from-[#175F30] to-[#22c55e] rounded-t-sm opacity-90 hover:opacity-100 transition-opacity cursor-pointer relative group"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-[10px] px-2 py-1 rounded transition-all">
                {height}%
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Users size={16} />
              <span className="text-xs font-medium">Active Leads</span>
            </div>
            <div className="text-xl font-bold">8,432</div>
          </div>
          <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Target size={16} />
              <span className="text-xs font-medium">Conversion</span>
            </div>
            <div className="text-xl font-bold">12.4%</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.4 },
          x: { duration: 0.6, delay: 0.4 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -right-4 md:-right-12 top-1/4 z-30 w-[220px] bg-white/80 backdrop-blur-md border border-white/60 rounded-xl p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
      >
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#175F30] to-[#22c55e] flex items-center justify-center text-white shadow-inner">
            <Activity size={18} />
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500">Live ROI</div>
            <div className="text-lg font-bold text-foreground">485%</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.6 },
          x: { duration: 0.6, delay: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute -left-4 md:-left-8 bottom-1/4 z-30 w-[200px] bg-white/90 backdrop-blur-md border border-white/60 rounded-xl p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
      >
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <BarChart3 size={18} />
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500">Campaigns</div>
            <div className="text-lg font-bold text-foreground flex items-center gap-1">
              Active <ChevronRight size={14} className="text-blue-500" />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

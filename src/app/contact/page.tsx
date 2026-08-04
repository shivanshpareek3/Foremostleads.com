"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#fcfdfc] font-sans relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-[700px] bg-gradient-to-bl from-[#22c55e]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-[50%] h-[500px] bg-gradient-to-tr from-[#175F30]/5 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full relative z-10 flex flex-col lg:flex-row gap-16 xl:gap-24 items-start min-h-[85vh]">
        
        {/* Left Side - Information */}
        <div className="flex flex-col w-full lg:w-5/12 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest text-[#175F30] bg-[#eef7f1] border border-[#22c55e]/20 rounded-full uppercase">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black font-heading text-gray-900 mb-6 leading-[1.1]">
              Let's Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#175F30] to-[#22c55e]">Business.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md">
              Ready for predictable growth? Book a free strategy call and let's map out a custom blueprint for your revenue goals.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 mb-16">
            {[
              { icon: Phone, title: "Call Us Directly", desc: "+91 - 6350291420", href: "tel:+916350291420" },
              { icon: Mail, title: "Email Address", desc: "connect@foremostleads.in", href: "mailto:connect@foremostleads.in" },
              { icon: MapPin, title: "Headquarters", desc: "IT Park, Sitapura, Jaipur", href: null }
            ].map((item, idx) => {
              const content = (
                <>
                  <h4 className="font-bold text-base font-heading text-gray-900 mb-1 group-hover:text-[#175F30] transition-colors">{item.title}</h4>
                  <p className="text-sm font-medium text-gray-500">{item.desc}</p>
                </>
              );

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#175F30] group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300 shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    {item.href ? (
                      <a href={item.href} className="block w-full h-full">
                        {content}
                      </a>
                    ) : (
                      <div>
                        {content}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-gray-900 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_70%)]" />
            <h4 className="font-bold text-lg font-heading text-white mb-6 relative z-10">Connect With Us</h4>
            <div className="flex items-center gap-4 relative z-10">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/company/foremost-leads/posts/?feedView=all" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Premium Form Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-7/12 relative"
        >
          {/* Decorative Elements around form */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#175F30]/20 to-[#22c55e]/20 blur-2xl rounded-[3rem] z-0 opacity-50" />
          
          <div className="relative z-10 bg-white rounded-[2rem] p-1 shadow-2xl border border-gray-100/50">
            <div className="bg-white rounded-[1.85rem] p-8 md:p-12 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
              <ContactForm />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

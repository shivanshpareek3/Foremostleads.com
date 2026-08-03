import { Target, MonitorPlay, MousePointerClick, BarChart, Settings, LayoutTemplate, Mail, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    { icon: <Target size={20} />, title: "Lead Generation", desc: "Targeted strategies that bring qualified leads." },
    { icon: <MonitorPlay size={20} />, title: "Meta Ads", desc: "ROI-focused Facebook & Instagram campaigns." },
    { icon: <MousePointerClick size={20} />, title: "Google Ads", desc: "Drive traffic, increase conversions and grow." },
    { icon: <BarChart size={20} />, title: "Sales Funnels", desc: "High-converting funnels built for your business." },
    { icon: <Settings size={20} />, title: "CRM & Automation", desc: "Automate follow-ups and nurture leads." },
    { icon: <LayoutTemplate size={20} />, title: "Landing Pages", desc: "High-converting landing pages that sell." },
    { icon: <Mail size={20} />, title: "Email Marketing", desc: "Engage, nurture and convert with email." },
    { icon: <LineChart size={20} />, title: "Analytics & Tracking", desc: "Track performance and scale what works." },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white font-sans pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Our Services</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Data-driven marketing solutions to grow your business faster and smarter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all flex flex-col">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <Link href="#" className="flex items-center gap-2 text-[#175F30] text-sm font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Banner Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#f8fcf9] border border-[#e2f1e7] rounded-3xl p-10 mb-24">
          <div className="max-w-lg mb-8 md:mb-0">
            <h3 className="text-2xl font-bold font-heading mb-4">Not sure which service is right for you?</h3>
            <p className="text-gray-500 mb-8">Get a free strategy call and we'll help you find the perfect solution.</p>
            <Link href="/contact" className="px-6 py-3 bg-[#175F30] text-white font-semibold rounded-md hover:bg-brand-hover transition-colors inline-block">
              Book Free Call
            </Link>
          </div>
          <div className="w-full md:w-[400px] h-[250px] bg-gray-200 rounded-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center text-gray-400 font-semibold text-sm">Team Image Placeholder</div>
          </div>
        </div>

        {/* Features Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-gray-100">
          <div>
            <div className="font-bold font-heading mb-2">Data-Driven</div>
            <div className="text-xs text-gray-500">We rely on data, not guesswork.</div>
          </div>
          <div>
            <div className="font-bold font-heading mb-2">ROI-Focused</div>
            <div className="text-xs text-gray-500">We care about your results.</div>
          </div>
          <div>
            <div className="font-bold font-heading mb-2">Transparent</div>
            <div className="text-xs text-gray-500">Clear reporting and communication.</div>
          </div>
          <div>
            <div className="font-bold font-heading mb-2">Dedicated Support</div>
            <div className="text-xs text-gray-500">We're with you at every step.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

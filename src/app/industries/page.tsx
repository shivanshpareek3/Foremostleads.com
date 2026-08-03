import { Building2, Stethoscope, GraduationCap, ShoppingCart, Presentation, Plane, Landmark, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    { icon: <Building2 size={20} />, title: "Real Estate", desc: "Generate high-quality leads and close more deals." },
    { icon: <Stethoscope size={20} />, title: "Healthcare", desc: "Grow your clinic and get more patients." },
    { icon: <GraduationCap size={20} />, title: "Education", desc: "Increase admissions and enrollments." },
    { icon: <ShoppingCart size={20} />, title: "E-commerce", desc: "Boost sales and grow your online store." },
    { icon: <Presentation size={20} />, title: "Coaching", desc: "Attract more students and grow your coaching business." },
    { icon: <Plane size={20} />, title: "Travel", desc: "Get more bookings and increase revenue." },
    { icon: <Landmark size={20} />, title: "Finance", desc: "Generate leads for loans, insurance & financial services." },
    { icon: <Cloud size={20} />, title: "SaaS", desc: "Scale your SaaS business with paid ads & funnels." },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#fcfdfc] font-sans pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Industries We Serve</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            We deliver result-driven solutions for every industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {industries.map((ind, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-[#edf3ef] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                {ind.icon}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{ind.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-[#eef7f1] border border-[#d3ecd8] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-heading text-foreground mb-1">Don't see your industry?</h3>
            <p className="text-gray-500 text-sm">We work with businesses from all industries.</p>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-[#175F30] text-white font-semibold rounded-md hover:bg-brand-hover transition-colors flex items-center gap-2">
            Book Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

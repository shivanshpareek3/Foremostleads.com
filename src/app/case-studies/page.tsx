import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const cases = [
    {
      industry: "Real Estate",
      title: "How We Generated ₹1.2Cr+ Revenue for a Real Estate Company",
      leads: "2,345",
      roas: "5.6x",
      revenue: "₹1.2Cr+",
    },
    {
      industry: "Education",
      title: "How We Scaled an EdTech Business with Paid Ads & Funnels",
      leads: "1,856",
      roas: "4.3x",
      revenue: "₹74L+",
    },
    {
      industry: "Healthcare",
      title: "How We Helped a Dental Clinic Get 3X More Patients",
      leads: "1,243",
      roas: "6.1x",
      revenue: "₹38L+",
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white font-sans pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Case Studies</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real results from real businesses.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-8 mb-24">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all">
              <div className="flex-1 flex flex-col items-start text-left">
                <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider text-[#175F30] bg-[#eef7f1] rounded-full uppercase">
                  {c.industry}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-8 pr-4">{c.title}</h3>
                
                <div className="grid grid-cols-3 gap-6 mb-8 w-full">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Leads Generated</div>
                    <div className="text-xl font-bold font-heading">{c.leads}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">ROAS</div>
                    <div className="text-xl font-bold font-heading">{c.roas}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Revenue</div>
                    <div className="text-xl font-bold font-heading">{c.revenue}</div>
                  </div>
                </div>

                <Link href="#" className="flex items-center gap-2 text-[#175F30] text-sm font-semibold hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>

              {/* Faux Dashboard Graphic */}
              <div className="w-full md:w-[350px] h-[220px] bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <div className="w-24 h-3 bg-gray-200 rounded"></div>
                  <div className="w-8 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1/3 h-16 bg-white border border-gray-100 rounded shadow-sm flex flex-col p-2 gap-1 justify-center">
                     <div className="w-10 h-2 bg-gray-100 rounded"></div>
                     <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-1/3 h-16 bg-white border border-gray-100 rounded shadow-sm flex flex-col p-2 gap-1 justify-center">
                     <div className="w-10 h-2 bg-gray-100 rounded"></div>
                     <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-1/3 h-16 bg-white border border-gray-100 rounded shadow-sm flex flex-col p-2 gap-1 justify-center">
                     <div className="w-10 h-2 bg-gray-100 rounded"></div>
                     <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-full flex-1 bg-white border border-gray-100 rounded shadow-sm mt-1 flex items-end p-2 gap-1">
                   {[40, 60, 30, 80, 50, 90, 70, 100].map((h, j) => (
                     <div key={j} className="flex-1 bg-brand/20 rounded-t" style={{height: `${h}%`}}></div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-[#175F30] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-heading mb-1">Be Our Next Success Story</h3>
            <p className="text-brand-light text-sm">Let's grow your business together.</p>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-white text-[#175F30] font-semibold rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
            Book Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

import Hero from "@/components/Hero";
import { CheckCircle, MousePointerClick, Target, TrendingUp, MonitorPlay, BarChart, Funnel } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white font-sans">
      <Hero />
      
      {/* Logos Section */}
      <section className="w-full py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 font-medium mb-8">Trusted by 100+ businesses across the globe</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-bold text-xl flex items-center gap-1"><span className="text-blue-600">∞</span> Meta</span>
            <span className="font-bold text-xl">Google</span>
            <span className="font-bold text-xl flex items-center gap-1"><span className="text-orange-500">❖</span> HubSpot</span>
            <span className="font-bold text-xl">ClickFunnels</span>
            <span className="font-bold text-xl flex items-center gap-1"><span className="text-blue-400">W</span> WordPress</span>
            <span className="font-bold text-xl text-[#96bf48]">shopify</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">₹9Cr+</div>
            <div className="text-sm text-gray-500">Revenue Generated<br/>For Our Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">150+</div>
            <div className="text-sm text-gray-500">Businesses Scaled<br/>Successfully</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">95%</div>
            <div className="text-sm text-gray-500">Client Retention<br/>Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">20+</div>
            <div className="text-sm text-gray-500">Industries<br/>We Serve</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Our Performance Marketing Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              End-to-end solutions to generate leads, drive sales and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Lead Generation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Get high-quality leads that convert into customers.</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                <MonitorPlay size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Meta Ads</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">High-converting ad campaigns that deliver real results.</p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                <MousePointerClick size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Google Ads</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Target the right audience and get maximum ROI.</p>
            </div>

            {/* Service 4 */}
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all">
              <div className="w-10 h-10 bg-[#eef7f1] text-[#175F30] rounded-lg flex items-center justify-center mb-6">
                <BarChart size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Sales Funnels</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Conversion-focused funnels that turn leads into sales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

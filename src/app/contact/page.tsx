import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#fcfdfc] font-sans pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side */}
        <div className="flex flex-col text-left pt-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Let's Grow Your<br/>Business Together</h1>
          <p className="text-gray-500 mb-12 text-sm leading-relaxed max-w-md">
            Book a free strategy call and let's discuss how we can help you achieve your goals.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex gap-4">
              <div className="text-[#175F30] mt-1"><Calendar size={20} /></div>
              <div>
                <h4 className="font-bold text-sm font-heading mb-1">Book a Call</h4>
                <p className="text-xs text-gray-500">Schedule a free strategy call with our experts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#175F30] mt-1"><Phone size={20} /></div>
              <div>
                <h4 className="font-bold text-sm font-heading mb-1">Call Us</h4>
                <p className="text-xs text-gray-500">+91 - 6350291420</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#175F30] mt-1"><Mail size={20} /></div>
              <div>
                <h4 className="font-bold text-sm font-heading mb-1">Email Us</h4>
                <p className="text-xs text-gray-500">connect@foremostleads.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#175F30] mt-1"><MapPin size={20} /></div>
              <div>
                <h4 className="font-bold text-sm font-heading mb-1">Our Office</h4>
                <p className="text-xs text-gray-500">IT Park, Sitapura, Jaipur</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm font-heading mb-4">Follow Us</h4>
            <div className="flex items-center gap-3 text-[#175F30]">
              <a href="#" className="w-8 h-8 rounded-full bg-[#175F30] text-white flex items-center justify-center hover:bg-brand-hover transition-colors text-xs font-bold">FB</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#175F30] text-white flex items-center justify-center hover:bg-brand-hover transition-colors text-xs font-bold">IN</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#175F30] text-white flex items-center justify-center hover:bg-brand-hover transition-colors text-xs font-bold">IG</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#175F30] text-white flex items-center justify-center hover:bg-brand-hover transition-colors text-xs font-bold">X</a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
           <ContactForm />
        </div>

      </div>
    </div>
  );
}

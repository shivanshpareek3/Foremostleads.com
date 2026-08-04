"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/actions/contact";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().min(10, "Please provide more details about your goals"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError("");
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSuccess(true);
        reset();
      } else {
        setError(res.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-16 px-6"
          >
            <div className="w-20 h-20 bg-[#eef7f1] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              <CheckCircle2 size={40} className="text-[#175F30]" />
            </div>
            <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Request Received!</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              We've received your strategy call request. One of our growth experts will be in touch with you shortly.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg"
            >
              Send Another Request <ArrowRight size={18} />
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-6 w-full"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-2">Request Your Audit</h3>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and we will contact you within 24 hours.</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-semibold border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 group-focus-within:text-[#175F30] transition-colors">Your Name</label>
                <input 
                  {...register("name")}
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
                />
                {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name.message}</p>}
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 group-focus-within:text-[#175F30] transition-colors">Email Address</label>
                <input 
                  {...register("email")}
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
                />
                {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 group-focus-within:text-[#175F30] transition-colors">Phone Number</label>
                <input 
                  {...register("phone")}
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone.message}</p>}
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 group-focus-within:text-[#175F30] transition-colors">Business Type</label>
                <select 
                  {...register("businessType")}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm text-gray-700 bg-gray-50/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23175F30%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1.25rem_center]"
                >
                  <option value="" disabled selected hidden>Select your industry...</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Coaching">Coaching</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessType && <p className="text-red-500 text-xs mt-2 font-medium">{errors.businessType.message}</p>}
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 group-focus-within:text-[#175F30] transition-colors">Your Message</label>
              <textarea 
                {...register("message")}
                rows={4}
                placeholder="Tell us about your business goals and what you're looking to achieve..."
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50 resize-none"
              />
              {errors.message && <p className="text-red-500 text-xs mt-2 font-medium">{errors.message.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative w-full py-5 mt-4 bg-gradient-to-r from-[#175F30] to-[#22c55e] text-white font-bold rounded-xl overflow-hidden group shadow-[0_15px_30px_-10px_rgba(34,197,94,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing Request...
                  </>
                ) : (
                  <>
                    Book My Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

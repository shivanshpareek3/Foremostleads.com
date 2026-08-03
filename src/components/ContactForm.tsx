"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/actions/contact";

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
    <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
      <h3 className="text-2xl font-bold font-heading mb-8">Book Free Strategy Call</h3>
      
      {success ? (
        <div className="bg-[#eef7f1] text-[#175F30] p-6 rounded-xl border border-[#d3ecd8] text-center">
          <h4 className="font-bold text-lg mb-2">Thank You!</h4>
          <p className="text-sm">Your strategy call request has been received. We'll be in touch shortly.</p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-6 px-6 py-2 bg-[#175F30] text-white rounded-md text-sm font-semibold hover:bg-brand-hover"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {error && <div className="text-red-500 text-sm font-semibold">{error}</div>}
          
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Your Name</label>
            <input 
              {...register("name")}
              type="text" 
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#175F30]/20 focus:border-[#175F30] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Email Address</label>
            <input 
              {...register("email")}
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#175F30]/20 focus:border-[#175F30] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number</label>
            <input 
              {...register("phone")}
              type="tel" 
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#175F30]/20 focus:border-[#175F30] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Business Type</label>
            <select 
              {...register("businessType")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#175F30]/20 focus:border-[#175F30] transition-all text-sm text-gray-700 bg-gray-50/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23175F30%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
            >
              <option value="">Select your business type</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Coaching">Coaching</option>
              <option value="SaaS">SaaS</option>
              <option value="Other">Other</option>
            </select>
            {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Your Message</label>
            <textarea 
              {...register("message")}
              rows={4}
              placeholder="Tell us about your business goals"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#175F30]/20 focus:border-[#175F30] transition-all text-sm placeholder:text-gray-400 bg-gray-50/50 resize-none"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-2 bg-[#175F30] text-white font-bold rounded-lg hover:bg-brand-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Book My Free Call"}
          </button>
        </form>
      )}
    </div>
  );
}

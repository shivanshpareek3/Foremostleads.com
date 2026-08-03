import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Rohit Sharma", role: "Founder & CEO" },
    { name: "Aman Verma", role: "Performance Marketer" },
    { name: "Neha Singh", role: "Growth Strategist" },
    { name: "Priya Patil", role: "Automation Expert" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white font-sans pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">About Foremost Leads</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We are a performance marketing & automation agency helping businesses generate leads, increase sales and scale profitably.
            </p>
          </div>
          <div className="flex-1 w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-100">
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm">Office Image Placeholder</div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24 pt-12 border-t border-gray-100">
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">5+</div>
            <div className="text-sm text-gray-500">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">150+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">20+</div>
            <div className="text-sm text-gray-500">Industries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading text-[#175F30] mb-2">₹9Cr+</div>
            <div className="text-sm text-gray-500">Revenue Generated</div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To empower businesses with result-driven marketing, automation and data-backed strategies that deliver measurable growth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To be the most trusted growth partner for businesses worldwide by delivering exceptional results and building long-term relationships.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6 text-center md:text-left">Our Core Values</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-[#175F30] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold font-heading text-sm mb-1">Integrity</h4>
                  <p className="text-xs text-gray-500">We believe in honesty and transparency.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-[#175F30] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold font-heading text-sm mb-1">Results</h4>
                  <p className="text-xs text-gray-500">We are committed to delivering real results.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-[#175F30] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold font-heading text-sm mb-1">Innovation</h4>
                  <p className="text-xs text-gray-500">We are the forerunners of new ideas.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-[#175F30] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold font-heading text-sm mb-1">Client Success</h4>
                  <p className="text-xs text-gray-500">Your success is our success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold font-heading mb-4">Meet Our Team</h2>
          <p className="text-gray-500 text-sm mb-16">The experts behind your growth.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 mb-4 border-4 border-white shadow-md relative overflow-hidden">
                   <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-500">Photo</div>
                </div>
                <h4 className="font-bold font-heading text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

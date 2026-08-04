"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const sliderImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Dashboard 1
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop", // Data analytics
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2370&auto=format&fit=crop", // Team/marketing
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2376&auto=format&fit=crop" // Chart
];

export default function HeroSlider() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[400px] mx-auto perspective-[1000px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-[400px] sm:h-[500px] rounded-2xl shadow-2xl"
      >
        {sliderImages.map((src, index) => (
          <SwiperSlide key={index} className="rounded-2xl overflow-hidden border border-white/20 bg-[#175F30]/10 backdrop-blur-md">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Soft gradient overlay on image for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative floating shapes around the slider */}
      <img 
        src="https://ik.imagekit.io/shubhdev/images/shapes/img1.png" 
        alt="shape" 
        className="absolute -top-10 -left-10 w-24 animate-pulse opacity-60 z-[-1]"
      />
      <img 
        src="https://ik.imagekit.io/shubhdev/images/shapes/img3.png" 
        alt="shape" 
        className="absolute -bottom-10 -right-10 w-20 animate-bounce opacity-60 z-[-1]"
        style={{ animationDuration: '3s' }}
      />
    </div>
  );
}

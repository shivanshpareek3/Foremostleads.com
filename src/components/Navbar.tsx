"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/blog" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (!link) return;
      const underline = link.querySelector(".nav-underline");
      
      const handleMouseEnter = () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out", transformOrigin: "left center" });
      };
      
      const handleMouseLeave = () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.inOut", transformOrigin: "right center" });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-[20px] border-b border-[#22c55e]/30 shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-4"
          : "bg-transparent border-transparent shadow-none py-6"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link href="/" className="z-50 flex items-center">
          <Image 
            src="/foremost logo.webp" 
            alt="Foremost Leads Logo" 
            width={240} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => { linksRef.current[i] = el; }}
              className="relative text-[14px] font-medium text-foreground transition-colors tracking-wide py-2"
            >
              {link.name}
              <span className="nav-underline absolute bottom-0 left-0 w-full h-[2px] bg-[#175F30] scale-x-0" />
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/contact"
            className="hidden md:inline-flex relative group px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#175F30] to-[#22c55e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#175F30] to-[#22c55e] blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </Link>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          clipPath: isOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center w-full h-screen bg-white/95 backdrop-blur-xl"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold font-heading text-foreground hover:text-[#175F30] uppercase"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 + navLinks.length * 0.05 }}
          >
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-4 mt-4 text-lg font-bold text-white bg-gradient-to-r from-[#175F30] to-[#22c55e] rounded-lg inline-block shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Book a Call
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </motion.header>
  );
}

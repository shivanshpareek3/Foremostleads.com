import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import StickySidebar from "@/components/StickySidebar";
import AboutStats from "@/components/AboutStats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans relative">
      <StickySidebar />
      <Hero />
      <TrustLogos />
      <AboutStats />
      <Services />
    </div>
  );
}

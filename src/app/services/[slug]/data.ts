import { Target, BarChart, Settings, Zap, Users, ShieldCheck, Mail, LineChart, Sparkles } from "lucide-react";

// Define the content for each service slug
export const serviceContent = {
  "lead-generation": {
    title: "Explosive Lead Generation",
    subtitle: "High-intent leads delivered directly to your CRM.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    overviewTitle: "Stop Chasing Leads. Start Closing Deals.",
    overviewText: "We engineer multi-channel lead generation systems that attract high-ticket clients who are actively looking for your solution. No more unqualified tire-kickers. We focus purely on intent and ROI.",
    benefits: [
      { icon: Target, title: "Quality over Quantity", desc: "We filter out bad leads before they ever reach your sales team." },
      { icon: Zap, title: "Omni-Channel Targeting", desc: "We find your perfect audience across Meta, Google, and LinkedIn." },
      { icon: LineChart, title: "Transparent ROI", desc: "Track every single penny spent down to the exact revenue it generated." },
      { icon: Users, title: "Rapid Scaling", desc: "Once we find the winning formula, we scale budgets aggressively but safely." }
    ]
  },
  "meta-ads": {
    title: "High-Converting Meta Ads",
    subtitle: "Dominate Facebook & Instagram with scroll-stopping creatives.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    overviewTitle: "Turn Scrolling into Sales.",
    overviewText: "The algorithm is smart, but the creative is king. We build data-backed Meta Ad campaigns combining psychological hooks, stunning visuals, and advanced machine learning structures to print money.",
    benefits: [
      { icon: BarChart, title: "Advanced Pixel Tracking", desc: "Flawless server-side tracking to feed the algorithm perfect data." },
      { icon: Sparkles, title: "Creative Testing", desc: "Rapid A/B testing of hooks, copy, and videos to find unicorns." },
      { icon: Target, title: "Retargeting Loops", desc: "Stay top-of-mind and convert warm traffic with omnipresent ads." },
      { icon: LineChart, title: "Lower CPA", desc: "Continuous optimization to drop your cost-per-acquisition month over month." }
    ]
  },
  "google-ads": {
    title: "Intent-Driven Google Ads",
    subtitle: "Capture demand the exact moment your customers search.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    overviewTitle: "Be There When They Are Ready to Buy.",
    overviewText: "Google Ads isn't about bidding on every keyword. It's about capturing high-intent searchers and aggressively outbidding competitors on the 20% of keywords that drive 80% of your revenue.",
    benefits: [
      { icon: Target, title: "Search Intent Targeting", desc: "We only bid on keywords that signal a strong desire to purchase." },
      { icon: Zap, title: "Performance Max", desc: "Leveraging Google's AI to dominate Search, Display, and YouTube." },
      { icon: ShieldCheck, title: "Competitor Conquesting", desc: "Ethically steal your competitors' traffic when they search for their brand." },
      { icon: BarChart, title: "Conversion Tracking", desc: "Crystal clear data on which keywords actually lead to closed deals." }
    ]
  },
  "crm-automation": {
    title: "Intelligent CRM Automation",
    subtitle: "Turn leads into booked appointments on autopilot.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    overviewTitle: "Never Let Another Lead Fall Through the Cracks.",
    overviewText: "Speed to lead is everything. We build sophisticated CRM workflows that instantly follow up with prospects via SMS, Email, and WhatsApp the second they opt-in, booking them straight onto your calendar.",
    benefits: [
      { icon: Mail, title: "Omni-Channel Sequences", desc: "Automated follow-ups across Email, SMS, and WhatsApp." },
      { icon: Zap, title: "Instant Speed to Lead", desc: "Prospects are contacted within 5 minutes of submitting their info." },
      { icon: ShieldCheck, title: "Lead Scoring", desc: "Automatically identify and prioritize your hottest prospects." },
      { icon: Users, title: "Zero Manual Follow-ups", desc: "Your sales team only talks to people who are pre-qualified and booked." }
    ]
  },
  "funnels": {
    title: "Sales Funnel Engineering",
    subtitle: "Persuasive landing pages that convert clicks into cash.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    overviewTitle: "Your 24/7 Digital Salesman.",
    overviewText: "A bad landing page will burn your ad budget. We engineer high-converting sales funnels, webinar funnels, and VSLs that use proven psychological frameworks to guide prospects seamlessly to the checkout or booking page.",
    benefits: [
      { icon: Sparkles, title: "High-Converting Copy", desc: "Direct-response copywriting that speaks directly to your avatar's pain points." },
      { icon: Settings, title: "A/B Testing", desc: "Relentless split-testing of headlines, buttons, and layouts to maximize conversion rates." },
      { icon: Zap, title: "Lightning Fast Speeds", desc: "Pages optimized for millisecond load times to prevent bounce rates." },
      { icon: LineChart, title: "Webinar Integrations", desc: "Seamless setups for live and automated evergreen webinar funnels." }
    ]
  }
};

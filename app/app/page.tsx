"use client"
import { HeroSection } from "@/components/myLayouts/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title={
          <>
            Book. Match. Compete. <br />
            <span className="text-primary">Your Turf, Your Rules</span>
          </>
        }
        subtitle="A next-gen platform for turf booking, matchmaking, ranked competitions, and community-driven sports experiences."
        callToAction={{
          text: "GET STARTED",
          href: "auth/signin",
        }}
        backgroundImage="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
        // backgroundImage="./image.png"
        // backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRD3wFXG0D9OYGSQhGTE2NBJCGzULVnisKOQ&s"
        contactInfo={{
          website: "playtime.com",
          phone: "+91 98765 43210",
          address: "Hyderabad, Telangana, India",
        }}
      />
    </div>
  );
}

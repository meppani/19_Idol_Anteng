import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ParticipantGrid } from "@/components/ParticipantGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050714] relative overflow-hidden">
      {/* Navbar Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Participants Grid Section */}
      <ParticipantGrid />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

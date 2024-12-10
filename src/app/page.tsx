import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
    <HeroSection />
    <IntroSection />
    <ProjectSection />
    <Contact />
    </main>
  );
}

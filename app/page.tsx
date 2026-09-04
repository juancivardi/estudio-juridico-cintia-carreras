import Hero from "@/components/home/Hero";
import PracticeAreas from "@/components/home/PracticeAreas";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <ContactCTA />
      </main>
    </>
  );
}
import Hero from "@/components/home/Hero";
import PracticeAreas from "@/components/home/PracticeAreas";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import Coments from "@/components/home/Coments";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Coments />
        <ContactCTA />
      </main>
    </>
  );
}
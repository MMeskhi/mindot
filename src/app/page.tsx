import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroView from "@/views/HeroView";
import ServicesView from "@/views/ServicesView";
import WorkView from "@/views/WorkView";
import ContactView from "@/views/ContactView";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroView />
        <ServicesView />
        <WorkView />
        <ContactView />
      </main>
      <Footer />
    </>
  );
}

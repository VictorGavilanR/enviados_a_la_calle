import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import GallerySection from "./components/GallerySection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <GallerySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}

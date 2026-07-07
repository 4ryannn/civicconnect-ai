import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import DashboardPreview from "./components/sections/DashboardPreview";
import OurImpact from "./components/sections/OurImpact";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <OurImpact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
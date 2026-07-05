import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import HowItWorks from "./components/layout/HowItWorks";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;
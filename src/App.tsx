import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhoCanApply from './components/WhoCanApply';
import InvestorShowcase from './components/InvestorShowcase';
import FeaturedStartups from './components/FeaturedStartups';
import Integration from './components/Integration';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-100 selection:bg-teal-500/30 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <WhoCanApply />
      <InvestorShowcase />
      <FeaturedStartups />
      <Integration />
      <CTA />
    </div>
  );
}

export default App;

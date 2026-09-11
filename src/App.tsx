import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Programs } from './components/Programs';
import { Pricing } from './components/Pricing';
import { HoursLocation } from './components/HoursLocation';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-bone font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Programs />
        <Pricing />
        <HoursLocation />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import CollectionsBand from '@/components/CollectionsBand';
import WhoWeServe from '@/components/WhoWeServe';
import Process from '@/components/Process';
import About from '@/components/About';
import CTABand from '@/components/CTABand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <CollectionsBand />
        <WhoWeServe />
        <Process />
        <About />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

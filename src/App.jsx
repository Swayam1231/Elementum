import { useEffect } from 'react';
import 'animate.css';
import './styles/globals.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Studio from './components/Studio/Studio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

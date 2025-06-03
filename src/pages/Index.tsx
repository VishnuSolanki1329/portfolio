
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
// import FunFacts from '@/components/FunFacts';
import Testimonials from '@/components/Testimonials';
// import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
// import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-hidden">
        {/* Progress bar */}
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        {/* <FunFacts /> */}
        <Testimonials />
        {/* <BlogPreview /> */}
        <Contact />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

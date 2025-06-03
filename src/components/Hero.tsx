
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const techIcons = [
  { name: 'HTML', delay: 0 },
  { name: 'CSS', delay: 0.2 },
  { name: 'JS', delay: 0.4 },
  { name: 'React', delay: 0.6 },
  { name: 'Tailwind', delay: 0.8 },
  { name: 'Figma', delay: 1.2 },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Transforming Designs into Interactive Reality";

  useEffect(() => {
    setIsVisible(true);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setCurrentText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background gradient circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-portfolio-primary/20 dark:bg-portfolio-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-portfolio-secondary/20 dark:bg-portfolio-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={cn('space-y-6', isVisible ? 'animate-fade-in' : 'opacity-0')}>
            <div className="space-y-2 lg-mt-[0] mt-[100px]">
              <h2 className="text-xl md:text-2xl font-medium text-portfolio-accent">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                <span className="text-gradient">Creative</span><br />
                Frontend Designer
              </h1>
            </div>

            <p className="text-lg md:text-xl font-light max-w-xl typewriter  !whitespace-[pre-line]">
              {currentText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary text-center">View Work</a>
              <a href="#contact" className="btn-secondary text-center">Hire Me</a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            {/* Floating tech icons */}
            {techIcons.map((icon, index) => (
              <div
                key={icon.name}
                className={cn(
                  "absolute glass-card rounded-xl px-4 py-2 shadow-lg bg-[#c33dad] animate-float",
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                )}
                style={{
                  top: `${20 + (index * 12)}%`,
                  left: `${10 + ((index % 3) * 30)}%`,
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + index * 0.5}s`
                }}
              >
                <span className="font-display font-bold ">{icon.name}</span>
              </div>
            ))}

            {/* Hero illustration or abstract shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-portfolio-primary via-portfolio-secondary to-portfolio-accent animate-spin-slow opacity-30 dark:opacity-20"></div>
            <div className="absolute top-1/4  left-1/2 lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-portfolio-accent via-portfolio-primary to-portfolio-secondary animate-spin-slow opacity-40 dark:opacity-30" style={{ animationDirection: 'reverse', animationDuration: '10s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-slow flex lg:flex hidden flex-col items-center">
          <span className="text-sm lg:mb-2 mb-0 ">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

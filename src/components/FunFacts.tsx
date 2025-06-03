
import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Code, Users, Award } from 'lucide-react';

const facts = [
  {
    icon: <Code className="w-8 h-8" />,
    number: 150,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: 50,
    suffix: '+',
    label: 'Happy Clients',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    number: 1000,
    suffix: '+',
    label: 'Cups of Coffee',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: 15,
    suffix: '+',
    label: 'Awards Won',
    color: 'from-purple-500 to-pink-500'
  }
];

const AnimatedCounter: React.FC<{ end: number; duration?: number; onComplete?: () => void }> = ({
  end,
  duration = 2000,
  onComplete
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, onComplete]);

  return <span ref={countRef}>{count}</span>;
};

const FunFacts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/5 via-portfolio-secondary/5 to-portfolio-accent/5"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-portfolio-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-portfolio-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fun Facts</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Some interesting numbers about my journey
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-3xl p-8 card-hover relative overflow-hidden">
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${fact.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {fact.icon}
                </div>

                {/* Counter */}
                <div className="relative z-10 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-gradient">
                    {isVisible ? (
                      <AnimatedCounter end={fact.number} duration={2000 + index * 200} />
                    ) : (
                      '0'
                    )}
                    {fact.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="relative z-10 text-muted-foreground font-medium">
                  {fact.label}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${fact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;

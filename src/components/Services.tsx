
import React from 'react';
import { Code, Palette, Smartphone, Zap, Globe, Figma } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive websites with modern technologies like React, TypeScript, Angular js.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: ' Code Refactoring & Cleanup',
    description: 'Enhancing existing front-end codebases for better performance, structure, and maintainability.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile First Design',
    description: 'Designing mobile-first experiences that work seamlessly across all devices and screen sizes',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance Optimization',
    description: 'Optimizing websites for speed, SEO, and user experience with modern best practices',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Component-Based Development',
    description: 'Creating reusable, maintainable UI components using Angular, React, or other frameworks.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: <Figma className="w-8 h-8" />,
    title: 'Frontend Design with Figma',
    description: 'Figma-based responsive design turned into clean, scalable front-end code with full browser support.',
    color: 'from-red-500 to-rose-500'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden lg:py-[4rem] py-[2rem]">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-primary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I provide modern design and front-end development services tailored to your digital needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-3xl p-8 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

              {/* Icon with gradient background */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${service.color.replace('from-', '').replace(' to-', ', ')})` }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

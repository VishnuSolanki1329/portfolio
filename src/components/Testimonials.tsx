
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    testimonial: 'Working with this designer was an absolute pleasure. They delivered a stunning website that exceeded our expectations and helped increase our conversion rate by 40%.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial: 'The redesign of our Beauty Tech / Personalized Makeup  platform was brilliant. The attention to detail and focus on user experience transformed our business completely.',
  },
  {
    id: 3,
    name: 'Aisha chos',
    role: 'Marketing Director',
    company: 'CreativeAgency',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    testimonial: 'I\'ve worked with many designers, but this one stands out. They have a unique ability to turn complex requirements into beautiful, functional interfaces.',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative pb-[250px] pt-[60px] bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mb-[40px] mx-auto">
            Here's what people are saying about my work and collaboration
          </p>

          <div className="relative max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 absolute left-0 right-0 ${index === activeIndex ? 'opacity-100 translate-x-0' :
                  index < activeIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                  }`}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  image={testimonial.image}
                  testimonial={testimonial.testimonial}
                  isActive={index === activeIndex}
                />
              </div>
            ))}

            <div className="flex justify-center mt-8 space-x-2 absolute bottom-[0] left-[0]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors relative bottom-[-240px]   right-[-350px] lg:block hidden  ${index === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

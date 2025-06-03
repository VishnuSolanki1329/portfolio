
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center p-4 glass-card rounded-2xl">
      <span className="text-3xl md:text-4xl font-bold text-gradient">{value}</span>
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding lg:py-[4rem] py-[2rem] bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="aspect-square relative max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary to-portfolio-accent rounded-3xl -rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-portfolio-secondary to-portfolio-accent rounded-3xl rotate-3"></div>
            <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Frontend Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 ">
            <h3 className="text-2xl md:text-3xl font-bold">
              I'm a <span className="text-gradient">Frontend Designer</span> with a passion for creating beautiful digital experiences
            </h3>

            <p className="text-muted-foreground">
              Creative and detail-oriented web designer with 3.5 years of experience crafting visually appealing and highly functional websites.
              As a web designer, I aim to positively impact clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.             </p>

            <p className="text-muted-foreground">
              I specialize in designing with HTML, CSS, Tailwind, Bootstrap  and  Material UI.
              I have worked on 50+ responsive projects, delivering clean, user-friendly solutions with consistent branding.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <StatItem value="3+" label="Years Experience" />
              <StatItem value="50+" label="Projects Completed" />
              <StatItem value="30+" label="Happy Clients" />
              <StatItem value="5+" label="Design Awards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

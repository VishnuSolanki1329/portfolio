
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Bluebit technologies',
    position: 'Senior Frontend Designer',
    location: 'Surat, Gujarat',
    period: '2024 - Present',
    description: 'Developed and maintained back-office web applications using AngularJS and the PrimeNG component library for efficient and responsive front-end development',
    achievements: [
      'Increased user engagement by 45%',
      'Led a team of 4 Designers',
      'Implemented design system used across 2 products'
    ],
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    company: 'LaNet Team Software Solution Pvt Ltd.',
    position: 'Frontend Designer',
    location: 'Surat, Gujarat',
    period: '2021 - 2024',
    description: 'Developed responsive websites and web applications for various clients. Specialized in React.js development and modern CSS techniques.',
    achievements: [
      'Delivered 25+ client projects',
      'Reduced page load times by 60%',
      'Mentored junior developers'
    ],
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 3,
    company: 'Toshal Infotech',
    position: 'Website Designer (Training)',
    location: 'Surat, Gujarat',
    period: '2021 june',
    description: 'Studied principles of responsive design to ensure websites look good on all devices.',
    achievements: [
      'Learned and applied modern design frameworks such as Tailwind CSS and Bootstrap.',
      'Improved the website’s conversion rate by 70% through better layout and design.'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in design and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary via-portfolio-secondary to-portfolio-accent transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 transform md:-translate-x-2 -translate-y-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}></div>
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`}></div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                  <div className="glass-card rounded-3xl p-6 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} whitespace-nowrap text-white text-sm font-medium`}>
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-portfolio-accent"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

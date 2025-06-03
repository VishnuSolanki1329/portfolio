
import React from 'react';
import SkillCard from './SkillCard';

const skills = [
  { name: 'HTML5', icon: 'H5', level: 95, category: 'Frontend' },
  { name: 'CSS3', icon: 'CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: 'JS', level: 60, category: 'Frontend' },
  { name: 'React', icon: 'R', level: 50, category: 'Frontend' },
  { name: 'TypeScript', icon: 'TS', level: 55, category: 'Frontend' },
  { name: 'Tailwind', icon: 'TW', level: 95, category: 'Styling' },
  { name: 'Figma', icon: 'FG', level: 60, category: 'Design' },
  { name: 'GitHub', icon: 'GH', level: 70, category: 'Tools' },
  // { name: 'Next.js', icon: 'NX', level: 85, category: 'Framework' },
  // { name: 'Node.js', icon: 'ND', level: 70, category: 'Backend' },
  // { name: 'MongoDB', icon: 'DB', level: 75, category: 'Database' },
  // { name: 'GraphQL', icon: 'GQL', level: 65, category: 'API' },
];

const skillCategories = [
  { name: 'All', value: 'all' },
  { name: 'Frontend', value: 'Frontend' },
  { name: 'Design', value: 'Design' },
  { name: 'Tools', value: 'Tools' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring creative visions to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${activeCategory === category.value
                ? "bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in"
            >
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

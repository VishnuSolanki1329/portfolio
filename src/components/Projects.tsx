
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import logo from '../../src/images/makup.png';

const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'websites', name: 'Websites' },
  { id: 'ui', name: 'UI Designs' },
  { id: 'mini', name: 'Mini Projects' },
];

const projects = [
  {
    id: 1,
    title: 'Esports / Gaming Theme',
    description: 'Competitive games, tournaments, team stats, streaming',
    image: '../../src/images/hoco.svg',
    tags: ['Angular', 'PrimeNg', 'Bootstrap'],
    category: 'websites',
    demoUrl: 'https://hocosoftware.com/',
    githubUrl: '#',
  },
  {
    id: 2,
    title: ' Corporate / Tech & IT Services Website',
    description: 'web/mobile app services, cloud, or enterprise tech services',
    image: '../../src/images/zenixtech.png',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    category: 'ui',
    demoUrl: 'https://zenixtech.com/',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Historical / Archival Research Website',
    description: 'focused on preserving and sharing historical records from the Freedmen’s Bureau, a U.S. government agency created after the Civil War.',
    image: '../../src/images/imges3.png',
    tags: ['TypeScript', 'React', 'Tailwind Css'],
    category: 'websites',
    demoUrl: 'https://freedmensbureau.info/',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'News Submission / User-Generated Content Platform',
    description: 'This is a community-driven content curation platform, where users can submit and share news, links, or articles, potentially ranked by popularity or recency.',
    image: '../../src/images/imges1.png',
    tags: ['Next js', ' Tailwind CSS', 'React js'],
    category: 'mini',
    demoUrl: 'https://bvitime.com/submit/new',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'SaaS CRM Platform Website',
    description: 'helping businesses manage leads, customers, sales pipelines, and support workflows.',
    image: '../../src/images/Crmone.png',
    tags: ['Tailwind css', 'React js', 'Material UI'],
    category: 'websites',
    demoUrl: 'https://www.crmone.com/',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Beauty Tech / Personalized Makeup Platform',
    description: 'Educational Beauty Blog within a personalized makeup matching platform.',
    image: '../../src/images/makup.png',
    tags: ['Material ui', 'React js', 'Sass'],
    category: 'ui',
    demoUrl: 'https://stage.matchmymakeup.com/en-US',
    githubUrl: '#',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Showcase</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-default",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

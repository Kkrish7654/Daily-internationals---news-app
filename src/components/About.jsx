import React from 'react';
import ProjectCard from './ProjectCard';

const About = () => {
  const projects = [
    {
      name: 'E-commerce website',
      description: 'An online store selling various products.',
      url: 'https://example.com/ecommerce',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Todo app',
      description: 'A simple to-do list app.',
      url: 'https://example.com/todo',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Royalmart ecommerce app',
      description: 'A mobile app for shopping at Royalmart.',
      url: 'https://example.com/royalmart',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // add more projects as needed
  ];

  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <p className='sub-title'>
        My name is Krish Vishwakarma and I&apos;m a full-stack developer.
      </p>
      <h2>Projects</h2>
      <div className='project-cards'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default About;

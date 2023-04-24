import React from 'react';

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div className='project-card'>
      <img src={project.imageUrl} alt={project.name} />
      <div className='project-details'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          View project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

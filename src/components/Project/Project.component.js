import React from 'react';
import './Project.styles.scss';

const Project = ({ project }) => (
    <div className="project">
        <h3>{project.title}</h3>
        <div className="project-image-container">
            <img className="project-image" src={project.imageUrl} alt="blahhh" />
            <p className="project-summary">{project.summary}</p>
            <p>Technologies used: {(project.tech.map(t => t))}</p>
        </div>
    </div>
);

export default Project;
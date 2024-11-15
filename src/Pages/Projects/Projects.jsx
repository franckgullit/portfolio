import React from 'react';
import { useParams } from 'react-router-dom';

import projects from '../../data/projects.json';
import './Projects.scss';

function Projects() {

    const { id } = useParams();
    const project = projects.find((data) => data.id === id)

    return (
        <div className='project_body'>
            <div className='project_details'>
            <p className='project_title'>{project.title1}</p>
            <img src={project.cover} alt='projectImage' className='project_image' />
            </div>
            <div className='project_Description'>
                <p className='project_more'>{project.description}</p>
            </div>
        </div>

    )



}

export default Projects
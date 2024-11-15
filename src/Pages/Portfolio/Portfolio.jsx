import React from 'react';

import Projects from '../../data/projects.json';
import Card from '../../components/Card/Cards.jsx';
import './Portfolio.scss';

    function Portfolio() {
        return (
            <div className='projectContainer'>
                {
                    Projects.map((project) =>
                        <Card
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            cover={project.cover}
                        />
                    )
                }
            </div>
        )
    }

export default Portfolio
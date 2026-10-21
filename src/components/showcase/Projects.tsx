import React from 'react';
import { useNavigate } from 'react-router';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <p>[Add your verified projects. Choose a category to edit its placeholder.]</p>
            <div className="project-placeholder-list">
                <button className="site-button" onClick={() => navigate('/projects/software')}>
                    Software projects
                </button>
                <button className="site-button" onClick={() => navigate('/projects/music')}>
                    Music and sound
                </button>
                <button className="site-button" onClick={() => navigate('/projects/art')}>
                    Art and design
                </button>
            </div>
        </div>
    );
};

export default Projects;

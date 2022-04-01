import React from 'react';
import { useNavigate } from 'react-router';
import VerticalNavbar from './VerticalNavbar';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    const navigation = useNavigate();

    const handleClick = (path: string) => {
        navigation(path);
    };

    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h1>Projects</h1>
                <div className="text-block">
                    <p>
                        I have a lot of hobbies and projects I've worked on over
                        the years! Here are just some of my favorite!
                    </p>
                </div>
                <div style={styles.projectLinksContainer}>
                    <div
                        onMouseDown={() => handleClick('/projects/software')}
                        className="projectLinkContainer"
                    >
                        <h2>Software</h2>
                        <p>Projects</p>
                    </div>
                    <div
                        onMouseDown={() => handleClick('/projects/music')}
                        className="projectLinkContainer"
                    >
                        <h2>Music & Sound</h2>
                        <p>Ventures</p>
                    </div>
                    <div
                        onMouseDown={() => handleClick('/projects/art')}
                        className="projectLinkContainer"
                    >
                        <h2>Art & Design</h2>
                        <p>Endeavors</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
};

export default Projects;

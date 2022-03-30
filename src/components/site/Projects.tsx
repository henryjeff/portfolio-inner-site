import React from 'react';
import VerticalNavbar from './VerticalNavbar';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h3 style={styles.contentHeader}>PROJECTS</h3>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default Projects;

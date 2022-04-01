import React from 'react';
import VerticalNavbar from '../VerticalNavbar';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h1>Software</h1>
                <h2>PROJECTS</h2>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default SoftwareProjects;

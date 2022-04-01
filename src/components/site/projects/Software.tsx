import React from 'react';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h2>PROJECTS</h2>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default SoftwareProjects;

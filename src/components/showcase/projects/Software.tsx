import React from 'react';
import portfolioContent from '../../../constants/portfolioContent';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => (
    <div className="site-page-content">
        <h1>Software Projects</h1>
        <div className="text-block">
            <h2>[Add project name]</h2>
            <p>[Add a project description, your role, and technologies used.]</p>
            <p>[Add a verified project URL when available.]</p>
            <br />
            <h2>[Add another project]</h2>
            <p>[Replace this placeholder with your own project details.]</p>
            <p>
                Source repository:
                <a
                    href={portfolioContent.repository}
                    target="_blank"
                    rel="noreferrer"
                >
                    Om Kumar Mishra portfolio repository
                </a>
            </p>
        </div>
    </div>
);

export default SoftwareProjects;

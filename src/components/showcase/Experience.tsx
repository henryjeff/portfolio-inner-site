import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => (
    <div className="site-page-content">
        <h1>Experience</h1>
        <div className="text-block">
            <h2>[Add role and organization]</h2>
            <p>[Add dates, responsibilities, and verified accomplishments.]</p>
            <br />
            <p>[Add another experience entry, or remove this placeholder.]</p>
        </div>
        <ResumeDownload />
    </div>
);

export default Experience;

import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = () => (
    <div className="site-page-content">
        <h1>Art & Design</h1>
        <div className="text-block">
            <p>[Add original art or design work you have permission to publish.]</p>
            <p>[Add accurate collaborator and source-asset credits with each work.]</p>
        </div>
    </div>
);

export default ArtProjects;

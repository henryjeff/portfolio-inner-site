import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => (
    <div className="site-page-content">
        <h1>Music & Sound</h1>
        <div className="text-block">
            <p>[Add music or sound-design projects, if applicable.]</p>
            <p>[Add only recordings and descriptions you own or can publish.]</p>
        </div>
    </div>
);

export default MusicProjects;
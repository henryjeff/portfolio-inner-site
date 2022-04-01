import React from 'react';
import VerticalNavbar from '../VerticalNavbar';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h1>Music & Sound</h1>
                <h2>VENTURES</h2>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default MusicProjects;

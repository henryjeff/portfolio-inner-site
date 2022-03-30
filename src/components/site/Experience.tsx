import React from 'react';
import VerticalNavbar from './VerticalNavbar';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h3 style={styles.contentHeader}>EXPERIENCE</h3>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default Experience;

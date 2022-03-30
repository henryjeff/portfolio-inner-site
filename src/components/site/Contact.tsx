import React from 'react';
import VerticalNavbar from './VerticalNavbar';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h3 style={styles.contentHeader}>CONTACT</h3>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default Contact;

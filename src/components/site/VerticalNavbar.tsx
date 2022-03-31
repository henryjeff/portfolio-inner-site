import React from 'react';
import { Link } from '../general';
import forhire from '../../assets/pictures/forHireGif.gif';
import { useNavigate } from 'react-router';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h2 style={styles.headerText}>Henry</h2>
                <h2 style={styles.headerText}>Heffernan</h2>
                <p style={styles.headerShowcase}>SHOWCASE 22'</p>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                <img src={forhire} style={styles.image} alt="" />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        display: 'flex',
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        lineHeight: 1,
    },
    headerShowcase: {
        fontSize: 32,
        marginTop: 8,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '80%',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',
        display: 'flex',
        width: '100%',
    },
};

export default VerticalNavbar;

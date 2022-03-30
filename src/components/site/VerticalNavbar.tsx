import React from 'react';
import { Link } from '../general';
import logo from '../../assets/pictures/henryheffernanLogo.jpg';
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
                <img src={logo} style={styles.logo} alt="" />
                <p>2022 SHOWCASE</p>
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

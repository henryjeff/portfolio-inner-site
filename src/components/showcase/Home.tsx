import React from 'react';
import { Link } from '../general';

import forhire from '../../assets/pictures/forHireGif.gif';
import { useNavigate } from 'react-router-dom';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Henry Heffernan</h1>
                <h2>Software Engineer</h2>
            </div>
            <div style={styles.buttons}>
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
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;

import React from 'react';
import { Link } from '../general';
import portfolioContent from '../../constants/portfolioContent';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="showcase-home" style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>{portfolioContent.name}</h1>
                <h2>{portfolioContent.title}</h2>
            </div>
            <div className="showcase-home-links" style={styles.buttons}>
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
            <a
                className="repository-link"
                href={portfolioContent.repository}
                target="_blank"
                rel="noreferrer"
            >
                Portfolio repository
            </a>
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
    link: {
        padding: 16,
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;

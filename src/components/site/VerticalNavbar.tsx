import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import forhire from '../../assets/pictures/forHireGif.gif';
import { useNavigate } from 'react-router';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [projectsExpanded, setProjectsExpanded] = useState(false);

    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [window.location.pathname]);

    useEffect(() => {
        if (currentPath.includes('/projects')) {
            setProjectsExpanded(true);
        }
    }, [currentPath]);

    return (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Henry</h1>
                <h1 style={styles.headerText}>Heffernan</h1>
                <h3 style={styles.headerShowcase}>Showcase 22'</h3>
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
                    containerStyle={Object.assign(
                        {},
                        styles.link,
                        projectsExpanded && styles.expandedLink
                    )}
                    to="projects"
                    text="PROJECTS"
                />
                {
                    // if current path contains projects
                    projectsExpanded && (
                        <div style={styles.insetLinks}>
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/software"
                                text="SOFTWARE"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/music"
                                text="MUSIC"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/art"
                                text="ART"
                            />
                        </div>
                    )
                }
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
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
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

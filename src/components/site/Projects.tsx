import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import softwareIcon from '../../assets/pictures/projects/software.png';
import artIcon from '../../assets/pictures/projects/art.png';
import musicIcon from '../../assets/pictures/projects/music.png';
import arrowIcon from '../../assets/pictures/projects/arrow.png';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container "
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img src={icon} style={styles.projectLinkImage} alt="" />
                <div style={styles.projectText}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div style={styles.projectLinkRight}>
                {isHovering && (
                    <img src={arrowIcon} style={styles.arrowIcon} alt="" />
                )}
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <div className="text-block">
                <p>
                    I have a lot of hobbies and projects I've worked on over the
                    years! Here are just some of my favorite!
                </p>
            </div>
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={softwareIcon}
                    title="Software"
                    subtitle="Projects"
                    route="software"
                />
                <ProjectBox
                    icon={musicIcon}
                    title="Music & Sound"
                    subtitle="Ventures"
                    route="music"
                />
                <ProjectBox
                    icon={artIcon}
                    title="Art & Design"
                    subtitle="Endeavors"
                    route="art"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        height: 48,
        marginRight: 16,
    },
    projectLinkLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
};

export default Projects;

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
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
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
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}>
                {isHovering && (
                    <img
                        src={arrowIcon}
                        className="arrow-mount"
                        style={styles.arrowIcon}
                        alt=""
                    />
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
                    icon={
                        'https://web.archive.org/web/20091027081323im_/http://geocities.com/black_john/Computer_2.gif'
                    }
                    iconStyle={styles.computerIcon}
                    title="Software"
                    subtitle="PROJECTS"
                    route="software"
                />
                <ProjectBox
                    icon={
                        'https://web.archive.org/web/20090830005448/http://geocities.com/SoHo/Village/2665/images/Music001.gif'
                    }
                    iconStyle={styles.musicIcon}
                    title="Music"
                    subtitle="VENTURES"
                    route="music"
                />
                <ProjectBox
                    icon={
                        'https://web.archive.org/web/20090831202501/http://geocities.com/ilka_lemos_br/paint1.gif'
                    }
                    iconStyle={styles.artIcon}
                    title="Art"
                    subtitle="ENDEAVORS"
                    route="art"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 32,
    },
    projectLinkLeft: {
        alignItems: 'center',
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 40,
        height: 64,
    },
};

export default Projects;

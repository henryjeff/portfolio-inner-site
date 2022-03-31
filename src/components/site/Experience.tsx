import React from 'react';
import VerticalNavbar from './VerticalNavbar';
import hoverLogo from '../../assets/pictures/hoverLogo.gif';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <div style={styles.headerContainer}>
                    <div style={styles.header}>
                        <h1>Hover</h1>
                        <h3>FRONTEND ENGINEER</h3>
                    </div>
                    <img style={styles.hoverLogo} src={hoverLogo} alt="" />
                </div>
                <div className="text-block">
                    <p>
                        Hover is a discover-ability platform targeted towards
                        online content creators looking to grow an audience and
                        online presence. Written in React-Native and Typescript,
                        I was responsible for designing, implementing and
                        ensuring quality and scalability on the front-end.
                    </p>
                    <br />
                    <ul>
                        <li>
                            <p>
                                Lead major refactors to optimize app performance
                                across all devices by reducing redundant
                                re-renders, API calls and caching data on the
                                user’s device using the Redux store.
                            </p>
                        </li>
                        <li>
                            <p>
                                Designed and Implemented the new discover player
                                which allows for the consumption of media
                                agnostic to the orientation of the users device
                                by optimizing the UI layout in real time.
                            </p>
                        </li>
                        <li>
                            <p>
                                Created an in app video editor with the
                                capability to quickly cut and stitch video clips
                                on demand. Finished videos were rendered on the
                                user’s device using FFMPEG, the open source
                                standard for video manipulation.
                            </p>
                        </li>
                        <li>
                            <p>
                                Built out a robust and reusable functional
                                animation system to allow for performant native
                                animations in the app, ensuring a smoother user
                                experience across the board.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    hoverLogo: {
        height: 100,
        marginBottom: 16,
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
};

export default Experience;

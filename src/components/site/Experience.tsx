import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hover</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            <p>www.hover.gg</p>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>FRONTEND ENGINEER</h3>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Hover is a platform targeted towards online content creators
                    looking to grow an audience and online presence. Written in
                    React-Native and Typescript, I was responsible for
                    designing, implementing and ensuring quality and scalability
                    on the front-end.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Lead major refactors to optimize app performance
                            across all devices by reducing redundant re-renders,
                            API calls and caching data on the user’s device
                            using the Redux store.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed, Architected and Implemented the new
                            discover player which allows for the consumption of
                            media agnostic to the orientation of the users
                            device by optimizing the UI layout in real time.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created an in app video editor with the capability
                            to quickly cut and stitch video clips on demand.
                            Finished videos were rendered on the user’s device
                            using FFMPEG, the open source standard for video
                            manipulation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built out a robust and reusable functional animation
                            system to allow for performant native animations in
                            the app, ensuring a smoother user experience across
                            the board.
                        </p>
                    </li>
                </ul>
                <p>Dates Active: April 2020 - September 2021 </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BrACS</h1>
                        <a target="_blank" rel="noreferrer" href={'penis.beer'}>
                            <p>www.bracs.com</p>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>TEAM LEAD & ENGINEER</h3>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur laudantium labore voluptate dignissimos minus
                    minima omnis. Laboriosam velit iusto reiciendis, ut sed
                    fugit maiores, beatae nesciunt tempora quo earum adipisci?
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto repudiandae dignissimos explicabo
                            delectus! Commodi cupiditate ad rem, reprehenderit
                            velit alias qui
                        </p>
                    </li>
                    <li>
                        <p>
                            Quo obcaecati voluptatem, maiores quis, animi
                            quibusdam non adipisci deleniti, pariatur accusamus
                            enim laudantium unde necessitatibus! Vitae
                            perferendis tenetur facere beatae
                        </p>
                    </li>
                    <li>
                        <p>
                            Facere amet velit molestias officia earum iusto
                            error nobis necessitatibus quod sapiente eligendi,
                            dolorum at magnam corrupti voluptates.
                        </p>
                    </li>
                </ul>
                <p>Dates Active: September 2021 - May 2022 </p>
            </div>
            <div>
                <h1>SKILLS</h1>
                <h3>But maybe not here</h3>
                <p>
                    open up finder window and have shortcuts to each of the
                    languages
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>K-F/X</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            <p>www.kfxnyc.com</p>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>SPECIAL EFFECTS TECHNICIAN</h3>
                    </div>
                </div>
                {/* <img style={styles.hoverLogo} src={hoverLogo} alt="" /> */}
            </div>
            <div className="text-block">
                <p>
                    As a Special Effects Technician I worked on set with a
                    professional crew of 50+ people. I applied my problem
                    solving and technical skills to operate large equipment such
                    as rain machines, fog machines, small explosives and general
                    rigging in high pressure situations. Responsible for
                    ensuring that everything goes right when the cameras start
                    rolling.
                </p>
                <br />
                <h3 style={styles.indent}>SCREEN CREDITS:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
                <p>Dates Active: Fall 2019, Summer 2021</p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;

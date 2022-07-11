import React, { useEffect, useState } from 'react';
import Window from '../os/Window';
import { useInterval } from 'usehooks-ts';
import { motion } from 'framer-motion';

export interface CreditsProps extends WindowAppProps {}

const CREDITS = [
    {
        title: 'Engineering & Design',
        rows: [['Henry Heffernan', 'All']],
    },
    {
        title: 'Modeling & Texturing',
        rows: [
            ['Henry Heffernan', 'Texturing, Composition, & UV'],
            ['Mickael Boitte', 'Computer Model'],
            ['Sean Nicolas', 'Environment Models'],
        ],
    },
    {
        title: 'Sound Design',
        rows: [
            ['Henry Heffernan', 'Mixing, Composition, & Foley'],
            ['Sound Cassette', 'Office Ambience'],
            ['Windows 95 Startup Sound', 'Microsoft'],
        ],
    },
    {
        title: 'Special Thanks',
        rows: [
            ['Bruno Simon', 'SimonDev'],
            ['Lorelei Kravinsky', 'Scott Bass'],
            ['Trey Briccetti', 'Mom, Dad & Angela'],
        ],
    },
    {
        title: 'Inspiration',
        rows: [
            ['Bruno Simon', 'Jesse Zhou'],
            ['Pink Yellow', 'Vivek Patel'],
        ],
    },
];

const Credits: React.FC<CreditsProps> = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [time, setTime] = useState(0);

    // every 5 seconds, move to the next slide
    useInterval(() => {
        setTime(time + 1);
        // setCurrentSlide((currentSlide + 1) % CREDITS.length);
    }, 1000);

    useEffect(() => {
        if (time > 5) {
            setCurrentSlide((currentSlide + 1) % CREDITS.length);
            setTime(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const nextSlide = () => {
        setTime(0);
        setCurrentSlide((currentSlide + 1) % CREDITS.length);
    };

    return (
        // add on resize listener
        <Window
            top={48}
            left={48}
            width={1100}
            height={800}
            windowTitle="Credits"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2022 Henry Heffernan'}
        >
            <div
                onMouseDown={nextSlide}
                className="site-page"
                style={styles.credits}
            >
                <h2>Credits</h2>
                <p>henryheffernan.com, 2022</p>
                <br />
                <br />
                <br />
                <div style={styles.slideContainer}>
                    {
                        <motion.div
                            animate={{ opacity: 1, y: -20 }}
                            transition={{ duration: 0.5 }}
                            key={`section-${CREDITS[currentSlide].title}`}
                            style={styles.section}
                        >
                            <h3 style={styles.sectionTitle}>
                                {CREDITS[currentSlide].title}
                            </h3>
                            {CREDITS[currentSlide].rows.map((row, i) => {
                                return (
                                    <div key={`row-${i}`} style={styles.row}>
                                        <p>{row[0]}</p>
                                        <p>{row[1]}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    }
                </div>
                <p>Click to continue...</p>
                <br />
                <div style={styles.nextSlideTimer}>
                    {/* make a time number of dots */}
                    {Array.from(Array(time)).map((i) => {
                        return (
                            <div key={i}>
                                <p>.</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    credits: {
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 64,
        color: 'white',
        overflow: 'hidden',
    },
    row: {
        overflow: 'none',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 600,
        alignSelf: 'center',
    },
    section: {
        overflow: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 32,
        opacity: 0,
    },
    sectionTitle: {
        marginBottom: 32,
    },
    slideContainer: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    nextSlideTimer: {
        width: 64,
        height: 32,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
};

export default Credits;

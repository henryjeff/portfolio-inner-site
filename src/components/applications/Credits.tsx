import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import Window from '../os/Window';

export interface CreditsProps extends WindowAppProps {}

const CREDITS = [
    {
        title: 'Development',
        rows: [['Henry Heffernan', 'All']],
    },
    {
        title: 'Modeling and Texturing',
        rows: [
            ['Henry Heffernan', 'Texturing, Composition & UV'],
            ['Mickael Boitte', 'Computer Model'],
            ['Sean Nicolas', 'Enviornment Models'],
        ],
    },
    {
        title: 'Sound Design',
        rows: [['Henry Heffernan', 'All']],
    },
    {
        title: 'Special Thanks',
        rows: [
            ['Bruno Simon', 'SimonDev'],
            ['Lorelei Kravinsky', 'Scott Bass'],
            ['Trey Briccetti', 'Mom & Dad'],
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
    return (
        // add on resize listener
        <Window
            top={16}
            left={45}
            width={1000}
            height={700}
            windowTitle="Credits"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2022 Henry Heffernan'}
        >
            <div className="site-page" style={styles.credits}>
                <h2>henryheffernan.com Credits:</h2>
                <br />
                <br />
                <br />
                {CREDITS.map((section) => {
                    return (
                        <div
                            key={`section-${section.title}`}
                            style={styles.section}
                        >
                            <h3 style={styles.sectionTitle}>{section.title}</h3>
                            {section.rows.map((row, i) => {
                                return (
                                    <div key={`row-${i}`} style={styles.row}>
                                        <p>{row[0]}</p>
                                        <p>{row[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                <br />
                <p>Thank you for taking the time to check out my website!</p>
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
        overflow: 'scroll',
        alignItems: 'center',
        paddingBottom: 64,
        color: 'white',
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
    },
    sectionTitle: {
        marginBottom: 32,
    },
};

export default Credits;

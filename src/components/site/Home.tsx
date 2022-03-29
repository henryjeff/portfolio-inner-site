import React from 'react';
import { Link } from '../general';

import henny from '../../assets/pictures/henryheffernan.jpg';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <img src={henny}></img>
                <h3>SOFTWARE ENGINEER</h3>
                {/* <div style={styles.buttons}>
                    <Link to="about" text="About me" />
                    <Link to="experience" text="Work Experience" />
                    <Link to="projects" text="Projects" />
                    <Link to="contact" text="Contact me" />
                </div> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        display: 'flex',
        left: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    header: {
        flex: 1,
        margin: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        display: 'flex',
        width: 400,
        justifyContent: 'space-between',
        // background: 'red',
        marginTop: 32,
    },
    image: {
        width: '100%',
    },
    link: {
        padding: 8,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
};

export default Home;

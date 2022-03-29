import React from 'react';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return <div style={styles.page}>{/* <h1>Hello</h1> */}</div>;
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
    },
    buttons: {
        display: 'flex',
        // width: 200,
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

export default About;

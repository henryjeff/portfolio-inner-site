import React from 'react';
import { Text } from '../general';
// import WelcomeImage from '../../assets/pictures/youngAtComputer.png';
// import Button from '../os/Button';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <Text daydream size={21}>
                    Henry Heffernan
                </Text>
                <Text MS size={24}>
                    Software Engineer
                </Text>

                <div style={styles.buttons}>
                    <Text style={styles.link} link>
                        About me
                    </Text>
                    <Text style={styles.link} link>
                        Work Experience
                    </Text>
                    <Text style={styles.link} link>
                        Projects
                    </Text>
                    <Text style={styles.link} link>
                        Contact
                    </Text>
                </div>
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

export default Home;

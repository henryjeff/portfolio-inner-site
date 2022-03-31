import React from 'react';
import VerticalNavbar from './VerticalNavbar';
import me from '../../assets/pictures/workingAtComputer.jpg';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                {/* <img src={me} style={styles.topImage} alt="" /> */}
                <h1>Welcome</h1>
                <div className="text-block">
                    <p>
                        I'm Henry, an aspiring Software Engineer. I’m a recent
                        graduate from Rensselaer Polytechnic Institute with my
                        BS in computer science. I am currently looking for a job
                        doing
                    </p>
                    <br />
                    <p>
                        Thank you for taking the time to checkout my portfolio.
                        I hope you enjoy it and if you have any questions or
                        comments, feel free to contact me.
                    </p>
                </div>
                <h3>MORE ABOUT ME...</h3>
                <div className="text-block">
                    <p>
                        On January 13th, 2000, I was born in sunny Southern
                        California. I lived there most of my childhood until I
                        was about 8 years old when my family and I moved across
                        the country to New York. I attended Horace Greeley
                        Highschool from 2014-2018 and my senior year got
                        accepted into Rensselaer Polytechnic Institute to pursue
                        a degree in Computer Science.
                    </p>
                    <br />
                    <br />
                    <div style={styles.captionedImage}>
                        <img src={me} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> A real photo of me developing
                                this website :)
                            </sub>
                        </p>
                    </div>
                    <br />
                    <p>
                        I have always had a passion for technology and
                        engineering, and in middle school was introduced to the
                        world of programming. I am incredibly excited to be
                        graduating from RPI and I look forward to whatever job I
                        end up getting in the industry.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    captionedImage: {
        alignSelf: 'center',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 32,
        flexDirection: 'column',
    },
};

export default About;

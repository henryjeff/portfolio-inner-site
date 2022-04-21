import React, { useEffect, useRef, useState } from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentMe.png';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1>Welcome</h1>
            <div className="text-block">
                <p>
                    I'm Henry Heffernan. I am a software engineer soon to be
                    graduate from Rensselaer Polytechnic Institute with my BS in
                    computer science. I am currently looking for a job in the
                    software industry.
                </p>
                <br />
                <p>
                    Thank you for taking the time to checkout my portfolio. I
                    really hope you enjoy it. If you have any questions or
                    comments, feel free to contact me either through this site
                    on the contact page or through my email address --
                    henryheffernan@gmail.com
                </p>
            </div>
            <div className="text-block">
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>More about me...</h3>
                        <br />
                        <p>
                            On January 13th, 2000, I was born in sunny Southern
                            California. I lived there most of my childhood until
                            I was about 8 years old when my family and I moved
                            across the country to New York. I attended Horace
                            Greeley Highschool from 2014-2018 and in 2017 got
                            accepted into Rensselaer Polytechnic Institute to
                            pursue a degree in Computer Science. In the last
                            four years at RPI I have learned a lot about not
                            only Computer Science but myself. I am graduating as
                            a completely different person and I couldn't be more
                            happy and excited to start my journey as a Software
                            Engineer.
                        </p>
                        {/* <br />
                        <p>
                            It is safe to say that Computers Science and
                            software are my passion. I love to learn and create,
                            and software engineering fulfills that desire more
                            than anything I could ever imagine. I
                        </p>
                        <p>
                            I have always been interested in computers and
                            software, but what drives me most is my desire to
                            learn and create. So in addition to making software,
                            I have a lot of other different hobbies in fields
                            completely outside of computers.
                        </p>
                        <br />
                        <p>
                            First off, music. I absolutely love to make music.
                            Back when I was around 15 years old I learned the
                            basics of FL studio, and since then I haven't
                            stopped producing music. You can find more on this
                            on my music page along with examples of my work.
                        </p> */}
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, lookin mad steez in the
                                suit tech
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <p>
                    The other big hobby I have is Art and Animation. When I
                    started to make games with my good friend Scott in high
                    school we very quickly hit the road block of not having any
                    sort of artist or, to be honest, artistic ability. I ended
                    up taking on the responsibility of making all of our game
                    art and animation and absolutely fell in love with the
                    craft. Even though day to day I am not actively making hand
                    drawn art or animations, I still find myself using skills I
                    have learned from the discipline and applying them to my
                    software work on a super frequent basis. You can read more
                    about my endeavors into Art and Animation on my art page.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    I have always had a passion for technology and engineering.
                    I love to create and I am incredibly excited to be
                    graduating from RPI so I can work in the industry.
                </p>
                <br />
                <br />
            </div>
            <h3>WHAT IS THIS WEBSITE?</h3>
            <div className="text-block">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus in neque quo quis reprehenderit. Tempore fugit
                    eveniet cupiditate provident possimus dolore ut quia
                    molestiae. Fugiat eligendi labore tenetur doloribus
                    incidunt.
                </p>
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
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;

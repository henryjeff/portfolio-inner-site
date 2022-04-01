import React from 'react';
import VerticalNavbar from '../VerticalNavbar';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h1>Art & Design</h1>
                <h2>ENDEAVORS</h2>
                <div className="text-block">
                    <p>
                        While I love programming and software development, Art,
                        Design, and Animation will always hold a special place
                        in my heart.
                    </p>
                    <br />
                    <p>
                        Here are a few projects/things I've done over the years
                        to keep my artistic side of me alive. I'm always looking
                        to push myself creatively and learn new things.
                    </p>
                </div>
                <div className="text-block">
                    <h2>PIXEL ART & ANIMATION</h2>
                    <br />
                    <p>
                        In highschool I started learning how to draw and animate
                        pixel art because a good friend and I had started
                        getting interested in video game development and needed
                        art. We worked on our first game for a few years and I
                        learned so much about pixel art and specifically fell in
                        love with animation.
                    </p>
                    <br />
                    <div className="captioned-image">
                        <img src={girlRun} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Run animation by me of Noitu
                                Love, original sprite by kevink
                            </sub>
                        </p>
                    </div>
                    <p>
                        I really started enjoying the work I was doing, and felt
                        I was improving a lot. Around 2017 I started to upload
                        videos of my work flow and animation process to YouTube
                        just for fun. I was really surprised however when my
                        first video took off and got a few thousand views! Below
                        are the video links to the work I uploaded to youtube.
                    </p>
                    <br />
                    <h3>VIDEO LINKS</h3>
                    <br />
                    <ul>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art Walk Cycle
                                    Time-lapse and Tutorial
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                    Time-lapse
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                            >
                                <p>
                                    <b>VIDEO</b> - Pixel Art Bipedal Creature
                                    Run Cycle Time-lapse
                                </p>
                            </a>
                        </li>
                    </ul>
                    <br />
                    <p>
                        I fell off doing pixel art once I got to college and
                        started to really focus on my work and education, but I
                        will forever be thankful to have been a part of the
                        pixel art community for the few years I was involved. I
                        also learned a lot of invaluable lessons of animation
                        and design that apply all the time to the work I do now.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
    },
};

export default ArtProjects;

import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                I love to create software, and over the years have done tons of
                projects. Below are some of my favorite projects I have worked
                on over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>henryheffernan.com</h2>
                <br />
                <p>
                    henryheffernan.com is my portfolio website, and also in fact
                    the website you are on right now. This project was an
                    absolute joy to make and challenged me both technically and
                    creatively. Back in January I knew I wanted to make an
                    interactive portfolio website, and got the idea for this
                    site around early march. I've been developing it along-side
                    by last semester at school and if you are seeing this, it is
                    pretty much done! Of course this website will never be
                    "done" as it will continue to get updated with whatever I
                    end up doing or working on.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    The website is split into two parts, the 3D site, and the 2D
                    desktop site. The 3D site uses Three.js to render the scene
                    and renders the 2D site inside of it using an iframe. The 2D
                    desktop site is a simple react site that is hosted here
                    (link) and works as a standalone. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D
                    transforms using CSS to give the illusion of 3D. I'm
                    skipping over a lot of details, but that is the just of how
                    this website works!
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[Github]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[Github]</b> - Inner Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    A further technical breakdown for this website can be found
                    by clicking here. I hope you enjoy the site and if you run
                    into any issues feel free to post them on the the respective
                    github issues page.
                </p>
            </div>
            <div className="text-block">
                <h2>Guntattchment Saga The Sequel</h2>
                <br />
                <p>
                    Guntattchment Saga or GSTS is a game I made with my good
                    friend Scott Bass back in 2019. The game is a wave based top
                    down shooter where you progress by building the most
                    outrageous of weapons thru attaching as many attachments on
                    your weapon as you can. The game ceased development in 2019
                    due to not having enough time between the two of us to work
                    on it.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Guntattchment Saga Gameplay
                                demo, featuring the main character along with a
                                few of our grunt and dasher enemies.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Guntattchment Saga was a really fun project to work on and
                    had a multitude of challenges. An interesting challenge that
                    you may not even notice was the rotation of objects such as
                    the guns and keeping these rotations consistent at the pixel
                    scale. Weapons had to be able to point in any direction and
                    since weapons could vary in size and shape, we had to
                    develop an algorithm to rotate the pixel art in a way to
                    keep the art readable and look pretty. This turned out to be
                    an incredibly difficult challenge, but we did manage to come
                    up with something, as you can see in the video, it looks
                    pretty good in my opinion.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/scottbass47/gsts"
                        >
                            <p>
                                <b>[Github]</b> - Guntattchment Saga The Sequel
                                Unity Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/gsts_assets"
                        >
                            <p>
                                <b>[Github]</b> - Guntattchment Saga The Sequel
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately the game currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes however, a link to the game will be updated here.
                </p>
            </div>
            <div className="text-block">
                <h2>Skip the Scroll</h2>
                <br />
                <p>
                    While working at Hover, I found myself on github issue pages
                    frequently looking for answers to my problems. Whether it
                    was a general build issue with thousands of comments or
                    incredibly niche problem for a specific library we happened
                    to be using I would always find myself sifting though the
                    comments trying to find the right answer. After doing a lot,
                    I realized that the answers almost always were given a lot
                    of positive reactions in the comments. With this information
                    I decided to create a very simple chrome extension that
                    would sift through all the comments on the page, sort them
                    by positive reactions, and then allow you to traverse them
                    from most positive reactions to least positive reactions.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div>
                <p>
                    The extension is open source and currently released on the
                    Chrome web store. Skip the Scroll is obviously not a project
                    with massive scope, but was a fun little project I wanted to
                    showcase since it's a developer tool I do wanna give it some
                    visibility. If you like it feel free to star it on github
                    and rate it on the Chrome web store.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[Github]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you are a developer and have also found yourself
                    scrolling through a ton of github comments, I highly
                    recommend you check out Skip the Scroll.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;

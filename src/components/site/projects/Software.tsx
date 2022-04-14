import React from 'react';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>PROJECTS</h3>
            <br />
            <div className="text-block">
                <p>
                    While I do have a lot of hobbies I making and creating
                    software is where my passion shines the brightest. I love to
                    make things with an extreme level of detail and precision,
                    all the while letting my more creative abilities shine.
                </p>
                <br />
                <p>
                    I started programming in highschool learning how to scrape
                    and interact with websites. I went on to do a ton of passion
                    projects a lot of them with from on of my best friends from
                    highschool,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/scott-bass-189a7919b/"
                    >
                        Scott Bass
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple game projects, apps and a ton of miscellaneous
                    random projects.
                </p>
            </div>
            <div className="text-block">
                <h2>henryheffernan.com</h2>
                <br />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default SoftwareProjects;

import React from 'react';
// @ts-ignore
import music from '../../../assets/audio/house_master.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>VENTURES</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was 15 years old, I downloaded FL Studio and started to
                    produce my own music. I found a wonderful community on
                    reddit called r/edmproduction.
                </p>
                <br />
                <p>Here are some samples of my work!</p>
            </div>
            <h2>Something else</h2>
            <br />
            <p>
                Here are some pieces I'm very proud of. I've never gotten around
                to actually releasing any of these songs because I just produce
                and do this for fun.
            </p>
            <br />

            <MusicPlayer src={music} title="Hause" subtitle="Myself - 2022" />
            <br />
            <p>
                This first track started out as an experiment making some house
                music. At the time I was really getting into house music, and
                wanted to take a stab at making a house track with a little
                extra flare.
            </p>
            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of the
                        above track. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <p>
                I love so much about this track. From how it flows through 3
                very distinct and unique sections, to the sound design and
                groove. I'm particularly very proud of the composition, as I
                already mentioned. I really love the trichotomy of the happy
                upbeat energy in the intro and first drop into the rich and
                euphoric bridge and finally onto the dark final build and drop.
                While I didn't produce this song with a story in mind, I did
                write it all in order which I think ends up telling a story in
                itself. Overall, I had an absolute blast making this back in the
                fall of 2020.
            </p>
            {/* 
            <h3>2 more songs? + sound fx stuff</h3>

            <h3>Maybe overkill ^</h3>
            <br />
            <h3>Add in SFX</h3> */}
        </div>
    );
};

const styles: StyleSheetCSS = {};

export default MusicProjects;

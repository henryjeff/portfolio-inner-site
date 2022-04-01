import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Colors from '../../constants/colors';
import Home from '../site/Home';
import About from '../site/About';
import Toolbar from './Toolbar';
import Window from './Window';
import Experience from '../site/Experience';
import Projects from '../site/Projects';
import Contact from '../site/Contact';
import SoftwareProjects from '../site/projects/Software';
import MusicProjects from '../site/projects/Music';
import ArtProjects from '../site/projects/Art';
import VerticalNavbar from '../site/VerticalNavbar';

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    return (
        <div style={styles.desktop}>
            <Window
                top={10}
                left={20}
                width={1170}
                height={910}
                closeWindow={() => {}}
            >
                <Router>
                    <div className="site-page">
                        <VerticalNavbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/experience"
                                element={<Experience />}
                            />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/projects/software"
                                element={<SoftwareProjects />}
                            />
                            <Route
                                path="/projects/music"
                                element={<MusicProjects />}
                            />
                            <Route
                                path="/projects/art"
                                element={<ArtProjects />}
                            />
                        </Routes>
                    </div>
                </Router>
            </Window>

            <Toolbar />
        </div>
    );
};

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        display: 'flex',
        backgroundColor: Colors.turquoise,
    },
};

export default Desktop;

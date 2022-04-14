import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../site/Home';
import About from '../site/About';
import Window from '../os/Window';
import Experience from '../site/Experience';
import Projects from '../site/Projects';
import Contact from '../site/Contact';
import SoftwareProjects from '../site/projects/Software';
import MusicProjects from '../site/projects/Music';
import ArtProjects from '../site/projects/Art';
import VerticalNavbar from '../site/VerticalNavbar';

export interface ShowcaseExplorerProps {
    onClose: () => void;
    onInteract: () => void;
}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    return (
        <Window
            top={10}
            left={20}
            width={1170}
            height={910}
            windowTitle="Henry Heffernan - Showcase 2022"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
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
                        <Route path="/projects/art" element={<ArtProjects />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;

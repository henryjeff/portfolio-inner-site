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

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    return (
        <div style={styles.desktop}>
            <Window
                top={70}
                left={100}
                width={1000}
                height={800}
                closeWindow={() => {}}
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
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

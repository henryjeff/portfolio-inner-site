import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Colors from '../../constants/colors';
import Home from '../site/Home';
import Toolbar from './Toolbar';
import Window from './Window';

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    return (
        <div style={styles.desktop}>
            <Window
                top={70}
                left={200}
                width={800}
                height={600}
                closeWindow={() => {}}
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<div>About</div>} />
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
        backgroundColor: Colors.turquoise,
    },
};

export default Desktop;

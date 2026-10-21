import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Window from '../os/Window';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import portfolioContent, { portfolioSections } from '../../constants/portfolioContent';
import PortfolioSection from '../showcase/PortfolioSection';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const isNarrow = window.innerWidth <= 760;
    const { initWidth, initHeight } = useInitialWindowSize({ margin: isNarrow ? 16 : 128 });

    return (
        <Window
            top={isNarrow ? 8 : 24}
            left={isNarrow ? 8 : 104}
            width={initWidth}
            height={initHeight}
            windowTitle={`${portfolioContent.name} - Portfolio`}
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={portfolioContent.repository}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<PortfolioSection section="about" />} />
                        {portfolioSections.map(section => <Route key={section.id} path={section.path} element={<PortfolioSection section={section.id} />} />)}
                        <Route path="*" element={<Navigate to="/about" replace />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;

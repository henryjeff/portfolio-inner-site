import React from 'react';
import Colors from '../../constants/colors';
import { Text } from '../general';
import Home from '../site/Home';
import Window from './Window';
// import { FontStyle, FontWeights } from "../../constants/Styles";

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    return (
        <div style={styles.desktop}>
            <Window>
                <Home />
            </Window>
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

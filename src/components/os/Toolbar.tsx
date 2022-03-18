import React from 'react';
import Colors from '../../constants/colors';
import { Text } from '../general';
// import Home from '../site/Home';
// import Window from './Window';

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = (props) => {
    const getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let mins = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + mins + ' ' + amPm;
        return strTime;
    };

    return (
        <div style={styles.toolbarOuter}>
            <div style={styles.toolbarInner}>
                <div style={styles.toolbar}></div>
                <div style={styles.time}>
                    <Text MS size={10}>
                        {getTime()}
                    </Text>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    toolbarOuter: {
        boxSizing: 'border-box',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 28,
        background: Colors.lightGray,
        borderTop: `1px solid ${Colors.lightGray}`,
        display: 'flex',
    },
    toolbarInner: {
        borderTop: `1px solid ${Colors.white}`,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    toolbar: {
        flexGrow: 1,
        width: '100%',
    },
    time: {
        flexShrink: 1,
        width: 64,
        height: 20,
        boxSizing: 'border-box',
        marginRight: 4,
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: Colors.darkGray,
    },
};

export default Toolbar;

import React, { useEffect, useState } from 'react';
import Colors from '../../constants/colors';
// import { } from '../general';
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

    const [time, setTime] = useState(getTime());

    const updateTime = () => {
        setTime(getTime());
        setTimeout(() => {
            updateTime();
        }, 5000);
    };

    useEffect(() => {
        updateTime();
    });

    return (
        <div style={styles.toolbarOuter}>
            <div style={styles.toolbarInner}>
                <div style={styles.toolbar}></div>
                <div style={styles.time}>
                    <p style={styles.timeText}>{time}</p>
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
        zIndex: 100000,
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
    timeText: {
        fontSize: 10,
    },
};

export default Toolbar;

import React, { useState, useRef, useEffect } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface DoomAppProps extends WindowAppProps {}

const DoomApp: React.FC<DoomAppProps> = (props) => {
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Doom"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="doom.jsdos" />
        </Window>
    );
};

export default DoomApp;

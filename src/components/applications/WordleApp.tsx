import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface WordleAppProps {
    onClose: () => void;
    onInteract: () => void;
}

const WordleApp: React.FC<WordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={910}
            windowTitle="Henordle"
            rainbow
            closeWindow={props.onClose}
            onInteract={props.onInteract}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default WordleApp;

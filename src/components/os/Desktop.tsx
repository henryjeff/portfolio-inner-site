import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../../constants/colors';
import ShowcaseExplorer from '../applications/ShowcaseExplorer';
import WordleApp from '../applications/WordleApp';
import Toolbar from './Toolbar';

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    const [windows, setWindows] = useState<{
        [key in string]: { zIndex: number; component: React.ReactElement };
    }>({});

    useEffect(() => {
        addWindow(
            'showcase',
            <ShowcaseExplorer
                onInteract={() => onWindowInteract('showcase')}
                onClose={() => removeWindow('showcase')}
                key="showcase"
            />
        );
        addWindow(
            'wordle',
            <WordleApp
                onInteract={() => onWindowInteract('wordle')}
                onClose={() => removeWindow('wordle')}
                key="wordle"
            />
        );
    }, []);

    const removeWindow = (key: string) => {
        const newWindows = { ...windows };
        delete newWindows[key];
        setWindows(newWindows);
    };

    const getHighestZIndex = useCallback((): number => {
        let highestZIndex = 0;
        Object.keys(windows).forEach((key) => {
            const window = windows[key];
            if (window) {
                if (window.zIndex > highestZIndex)
                    highestZIndex = window.zIndex;
            }
        });
        return highestZIndex;
    }, [windows]);

    const onWindowInteract = useCallback(
        (key: string) => {
            setWindows((prevWindows) => ({
                ...prevWindows,
                [key]: {
                    ...prevWindows[key],
                    zIndex: 1 + getHighestZIndex(),
                },
            }));
        },
        [setWindows, getHighestZIndex]
    );

    const addWindow = (key: string, element: JSX.Element) => {
        setWindows((prevState) => ({
            ...prevState,
            [key]: {
                zIndex: getHighestZIndex() + 1,
                component: element,
            },
        }));
    };

    return (
        <div style={styles.desktop}>
            {/* For each window in windows, loop over and render  */}
            {Object.keys(windows).map((key) => {
                const element = windows[key].component;
                if (!element) return <div key={`win-${key}`}></div>;
                return (
                    <div
                        key={`win-${key}`}
                        style={{ zIndex: windows[key].zIndex }}
                    >
                        {React.cloneElement(element, {
                            key,
                            onInteract: () => onWindowInteract(key),
                            onClose: () => removeWindow(key),
                        })}
                    </div>
                );
            })}

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
    construction: {
        width: 'auto',
        height: 24,
    },
    constructionContainer: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        height: 24,
        backgroundColor: 'white',
        maxWidth: '100%',
        minWidth: '0%',
        paddingTop: 4,
        zIndex: 10000,
    },
};

export default Desktop;

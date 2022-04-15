import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../../constants/colors';
import ShowcaseExplorer from '../applications/ShowcaseExplorer';
// import WordleApp from '../applications/Henordle';
import Doom from '../applications/Doom';
import OregonTrail from '../applications/OregonTrail';
import Toolbar from './Toolbar';
import DesktopShortcut, { DesktopShortcutProps } from './DesktopShortcut';

export interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = (props) => {
    const [windows, setWindows] = useState<{
        [key in string]: { zIndex: number; component: React.ReactElement };
    }>({});

    const [shortcuts, setShortcuts] = useState<DesktopShortcutProps[]>([
        // { shortcutName: 'My Computer', icon: 'myComputer' },
        {
            shortcutName: 'This Computer',
            icon: 'myComputer',
            onOpen: () => {
                // addWindow(
                //     'showcase',
                //     <ShowcaseExplorer
                //         onInteract={() => onWindowInteract('showcase')}
                //         onClose={() => removeWindow('showcase')}
                //         key="showcase"
                //     />
                // );
            },
        },
        {
            shortcutName: 'My Showcase',
            icon: 'showcaseIcon',
            onOpen: () => {
                addWindow(
                    'showcase',
                    <ShowcaseExplorer
                        onInteract={() => onWindowInteract('showcase')}
                        onClose={() => removeWindow('showcase')}
                        key="showcase"
                    />
                );
            },
        },

        {
            shortcutName: 'The Oregon Trail',
            icon: 'trailIcon',
            onOpen: () => {
                addWindow(
                    'trail',
                    <OregonTrail
                        onInteract={() => onWindowInteract('trail')}
                        onClose={() => removeWindow('trail')}
                        key="trail"
                    />
                );
            },
        },
        {
            shortcutName: 'DOOM',
            icon: 'doomIcon',
            onOpen: () => {
                addWindow(
                    'doom',
                    <Doom
                        onInteract={() => onWindowInteract('doom')}
                        onClose={() => removeWindow('doom')}
                        key="doom"
                    />
                );
            },
        },
    ]);

    useEffect(() => {
        addWindow(
            'showcase',
            <ShowcaseExplorer
                onInteract={() => onWindowInteract('showcase')}
                onClose={() => removeWindow('showcase')}
                key="showcase"
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
            <div style={styles.shortcuts}>
                {shortcuts.map((shortcut, i) => {
                    return (
                        <div
                            style={Object.assign({}, styles.shortcutContainer, {
                                top: i * 128,
                            })}
                            key={shortcut.shortcutName}
                        >
                            <DesktopShortcut
                                icon={shortcut.icon}
                                shortcutName={shortcut.shortcutName}
                                onOpen={shortcut.onOpen}
                            />
                        </div>
                    );
                })}
            </div>

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
    shortcutContainer: {
        position: 'absolute',
    },
    shortcuts: {
        position: 'absolute',
        top: 16,
        left: 8,
    },
};

export default Desktop;

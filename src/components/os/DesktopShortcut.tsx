import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconName } from '../../assets/icons';
import colors from '../../constants/colors';
import { Icon } from '../general';

export interface DesktopShortcutProps {
    icon: IconName;
    shortcutName: string;
    invertText?: boolean;
    onOpen: () => void;
}

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
    icon,
    shortcutName,
    invertText,
    onOpen,
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [shortcutId, setShortcutId] = useState('');
    const [lastSelected, setLastSelected] = useState(false);
    const containerRef = useRef<any>();

    const [scaledStyle, setScaledStyle] = useState({});

    const requiredIcon = require(`../../assets/icons/${icon}.png`);
    const [doubleClickTimerActive, setDoubleClickTimerActive] = useState(false);

    const getShortcutId = useCallback(() => {
        const shortcutId = shortcutName.replace(/\s/g, '');
        return `desktop-shortcut-${shortcutId}`;
    }, [shortcutName]);

    useEffect(() => {
        setShortcutId(getShortcutId());
    }, [shortcutName, getShortcutId]);

    useEffect(() => {
        if (containerRef.current && Object.keys(scaledStyle).length === 0) {
            //@ts-ignore
            const boundingBox = containerRef.current.getBoundingClientRect();
            setScaledStyle({
                transformOrigin: 'center',
                transform: 'scale(1.5)',
                left: boundingBox.width / 4,
                top: boundingBox.height / 4,
                // transform: 'scale(1.5)',
                // left: boundingBox.width / 4,
                // top: boundingBox.height / 4,
            });
        }
    }, [scaledStyle]);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            // @ts-ignore
            const targetId = event.target.id;
            if (targetId !== shortcutId) {
                setIsSelected(false);
            }
            if (!isSelected && lastSelected) {
                setLastSelected(false);
            }
        },
        [isSelected, setIsSelected, setLastSelected, lastSelected, shortcutId]
    );

    const handleClickShortcut = useCallback(() => {
        if (doubleClickTimerActive) {
            onOpen && onOpen();
            setIsSelected(false);
            setDoubleClickTimerActive(false);
            return;
        }
        setIsSelected(true);
        setLastSelected(true);
        setDoubleClickTimerActive(true);
        // set double click timer
        setTimeout(() => {
            setDoubleClickTimerActive(false);
        }, 300);
    }, [doubleClickTimerActive, setIsSelected, onOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSelected, handleClickOutside]);

    return (
        <div
            id={`${shortcutId}`}
            style={Object.assign({}, styles.appShortcut, scaledStyle)}
            onMouseDown={handleClickShortcut}
            ref={containerRef}
        >
            <div id={`${shortcutId}`} style={styles.iconContainer}>
                <div
                    id={`${shortcutId}`}
                    className="desktop-shortcut-icon"
                    style={Object.assign(
                        {},
                        styles.iconOverlay,
                        isSelected && styles.checkerboard,
                        isSelected && {
                            WebkitMask: `url(${requiredIcon})`,
                        }
                    )}
                />
                <Icon icon={icon} style={styles.icon} />
            </div>
            <div
                className={
                    isSelected
                        ? 'selected-shortcut-border'
                        : lastSelected
                        ? 'shortcut-border'
                        : ''
                }
                id={`${shortcutId}`}
                style={isSelected ? { backgroundColor: colors.blue } : {}}
            >
                <p
                    id={`${shortcutId}`}
                    style={Object.assign(
                        {},
                        styles.shortcutText,
                        invertText && !isSelected && { color: 'black' }
                    )}
                >
                    {shortcutName}
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    appShortcut: {
        position: 'absolute',
        width: 56,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    shortcutText: {
        cursor: 'pointer',
        textOverflow: 'wrap',
        fontFamily: 'MSSerif',
        color: 'white',
        fontSize: 8,
        paddingRight: 2,
        paddingLeft: 2,
    },
    iconContainer: {
        cursor: 'pointer',
        paddingBottom: 3,
    },
    iconOverlay: {
        position: 'absolute',
        top: 0,
        width: 32,
        height: 32,
    },
    checkerboard: {
        backgroundImage: `linear-gradient(45deg, ${colors.blue} 25%, transparent 25%),
        linear-gradient(-45deg, ${colors.blue} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${colors.blue} 75%),
        linear-gradient(-45deg, transparent 75%, ${colors.blue} 75%)`,
        backgroundSize: `2px 2px`,
        backgroundPosition: `0 0, 0 1px, 1px -1px, -1px 0px`,
        pointerEvents: 'none',
    },
};

export default DesktopShortcut;

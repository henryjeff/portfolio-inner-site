import React from 'react';
import Colors from '../../constants/colors';

const BORDER_WIDTH = 6;

export interface DragIndicatorProps {
    dragRef: any;
    width: number;
    height: number;
}

const DragIndicator: React.FC<DragIndicatorProps> = ({
    dragRef,
    width,
    height,
}) => {
    return (
        <div
            style={Object.assign({}, styles.draggable, {
                width,
                height,
            })}
            ref={dragRef}
        >
            <div
                style={Object.assign({}, styles.hozDrag, styles.checkerboard)}
            />
            <div style={styles.vertDragContainer}>
                <div
                    style={Object.assign(
                        {},
                        styles.vertDrag,
                        styles.checkerboard
                    )}
                />
                <div
                    style={Object.assign(
                        {},
                        styles.vertDrag,
                        styles.checkerboard
                    )}
                />
            </div>
            <div
                style={Object.assign({}, styles.hozDrag, styles.checkerboard)}
            />
        </div>
    );
};

export const styles: StyleSheetCSS = {
    draggable: {
        opacity: 0,
        position: 'absolute',
        boxSizing: 'border-box',
        flexDirection: 'column',
    },
    hozDrag: {
        width: '100%',
        height: BORDER_WIDTH,
        backgroundColor: Colors.white,
        pointerEvents: 'none',
    },
    vertDragContainer: {
        width: '100%',
        height: `calc(100% - ${BORDER_WIDTH * 2}px)`,
        flex: 1,

        justifyContent: 'space-between',
        pointerEvents: 'none',
    },
    vertDrag: {
        width: BORDER_WIDTH,
        height: '100%',
        backgroundColor: Colors.white,
        pointerEvents: 'none',
    },
    checkerboard: {
        backgroundImage: `linear-gradient(45deg, black 25%, transparent 25%),
        linear-gradient(-45deg, black 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, black 75%),
        linear-gradient(-45deg, transparent 75%, black 75%)`,
        backgroundSize: `4px 4px`,
        backgroundPosition: `0 0, 0 2px, 2px -2px, -2px 0px`,
        pointerEvents: 'none',
    },
};

export default DragIndicator;

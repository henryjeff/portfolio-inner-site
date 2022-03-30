import React from 'react';
import { styles } from './DragIndicator';

export interface ResizeIndicatorProps {
    resizeRef: any;
    top: number;
    left: number;
    width: number;
    height: number;
    startResize: (e: any) => void;
}

const ResizeIndicator: React.FC<ResizeIndicatorProps> = ({
    resizeRef,
    top,
    left,
    width,
    height,
    startResize,
}) => {
    return (
        <div
            style={Object.assign({}, styles.draggable, {
                top,
                left,
                width,
                height,
            })}
            ref={resizeRef}
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
            <div
                onMouseDown={startResize}
                style={{
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    bottom: -40,
                    right: -40,
                    cursor: 'nwse-resize',
                }}
            ></div>
        </div>
    );
};

export default ResizeIndicator;

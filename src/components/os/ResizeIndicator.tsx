import React from 'react';
import { styles } from './DragIndicator';

export interface ResizeIndicatorProps {
    resizeRef: any;
    top: number;
    left: number;
    width: number;
    height: number;
}

const ResizeIndicator: React.FC<ResizeIndicatorProps> = ({
    resizeRef,
    top,
    left,
    width,
    height,
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
        </div>
    );
};

export default ResizeIndicator;

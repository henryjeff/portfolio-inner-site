// import { useState, useCallback } from 'react';

export default function useInitialWindowSize({ margin }: { margin?: number }) {
    const safeMargin = margin || 0;
    const availableWidth = Math.max(200, window.innerWidth - 16);
    const availableHeight = Math.max(220, window.innerHeight - 48);
    const initWidth = Math.max(
        Math.min(320, availableWidth),
        Math.min(window.innerWidth - safeMargin, availableWidth)
    );
    const initHeight = Math.max(
        Math.min(280, availableHeight),
        Math.min(window.innerHeight - safeMargin, availableHeight)
    );

    return { initWidth, initHeight };
}

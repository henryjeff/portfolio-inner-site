const colors = {
    white: '#d8e2f0',
    black: '#080b14',
    turquoise: '#0b1220',
    lightGray: '#111a2a',
    darkGray: '#26354b',
    blue: '#00e5ff',
    darkBlue: '#8b5cf6',
    red: '#ff2d95',
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;

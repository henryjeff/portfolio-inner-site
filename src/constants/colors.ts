const colors = {
  white: "#FFFFFF",
  black: "#000000",
  turquoise: "#6ba8a9",
  lightGray: "#c3c6ca",
  darkGray: "#86898d",
  blue: "#0000a3",
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;

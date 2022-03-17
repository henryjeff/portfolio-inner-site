// import { ButtonProps } from '../components/button/Button';
// import colors from '../Colors';
declare interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export type FontWeights = "regular" | "medium" | "bold" | "console";

/*
    Font info:
  
    400 - Regular
    500 - Medium
    700 - Bold
  */
export const FontStyle: { [key in FontWeights]: StyleSheet } = {
  regular: {
    //@ts-ignore
    fontFamily: "lores-15-bold-alt-oakland, sans-serif",
    //@ts-ignore
    fontWeight: 400,
    //@ts-ignore
    fontStyle: "normal",
    //@ts-ignore
    letterSpacing: 0.1,
  },
  medium: {
    //@ts-ignore
    fontFamily: "lores-15-bold-alt-oakland, sans-serif",
    //@ts-ignore
    fontWeight: 500,
    //@ts-ignore
    fontStyle: "normal",
    //@ts-ignore
    letterSpacing: 0.1,
  },
  bold: {
    //@ts-ignore
    fontFamily: "lores-15-bold-alt-oakland, sans-serif",
    //@ts-ignore
    fontWeight: 600,
    //@ts-ignore
    fontStyle: "normal",
    //@ts-ignore
    letterSpacing: 0.1,
  },
  console: {
    //@ts-ignore
    fontFamily: "mono",
    //@ts-ignore
    fontWeight: 600,
    //@ts-ignore
    fontStyle: "normal",
    //@ts-ignore
    letterSpacing: 0.1,
  },
};

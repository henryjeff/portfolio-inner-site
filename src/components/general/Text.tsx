import React from 'react';
import Colors from '../../constants/colors';
import { FontStyle, FontWeights } from '../../constants/Styles';

export interface TextProps {
    style?: React.CSSProperties;
    size?: number;
    color?: string;
    white?: boolean;
    mono?: boolean;
    weight?: FontWeights;
    verticalPadding?: boolean;
    horizontalPadding?: boolean;
    letterSpacing?: number;
    noTextWrap?: boolean;
    lineHeight?: number;
    noColor?: boolean;
    noSelect?: boolean;
    MS?: boolean;
    daydream?: boolean;
    JDCode?: boolean;
    LadyRadical?: boolean;
    link?: boolean;
}

const Text: React.FC<TextProps> = (props) => {
    const {
        size,
        color,
        weight,
        mono,
        white,
        verticalPadding,
        horizontalPadding,
        letterSpacing,
        noTextWrap,
        lineHeight,
        noColor,
        noSelect,
        MS,
        daydream,
        JDCode,
        LadyRadical,
        link,
    } = props;

    const textStyle = Object.assign(
        {},
        styles.text,
        size && { fontSize: size },
        color ? { color: color } : noColor ? {} : { color: Colors.black },
        weight && { ...FontStyle[weight] },
        mono && styles.mono,
        verticalPadding && { ...styles.verticalPadding },
        horizontalPadding && { ...styles.horizontalPadding },
        noTextWrap && { whiteSpace: 'wrap' },
        lineHeight && { lineHeight: lineHeight },
        noSelect && styles.noSelect,
        letterSpacing && { letterSpacing: letterSpacing },
        white && { color: Colors.white },
        MS && { fontFamily: 'MSSerif' },
        daydream && { fontFamily: 'daydream' },
        JDCode && { fontFamily: 'JDCode' },
        LadyRadical && { fontFamily: 'LadyRadical' },
        link && styles.link,
        props.style
    );

    return <p style={textStyle}>{props.children}</p>;
};

const styles: StyleSheetCSS = {
    text: {
        margin: 0,
        color: Colors.black,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textDecoration: 'none',
        overflow: 'hidden',
        ...FontStyle.regular,
    },
    verticalPadding: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    horizontalPadding: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    mono: {
        letterSpacing: 1.5,
        fontFamily: 'courier-prime',
    },
    noSelect: {
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
    },
    link: {
        textDecoration: 'underline',
        color: Colors.blue,
    },
};

export default Text;

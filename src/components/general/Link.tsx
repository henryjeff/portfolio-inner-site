import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from '../general';
import { TextProps } from './Text';

export interface LinkProps extends TextProps {
    text: string;
    to: string;
}

const Link: React.FC<LinkProps> = (props) => {
    return (
        <RouterLink to={props.to}>
            <Text style={styles.link} {...props} link>
                {props.text}
            </Text>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {};

export default Link;

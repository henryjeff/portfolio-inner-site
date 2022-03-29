import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
}

const Link: React.FC<LinkProps> = (props) => {
    return (
        <RouterLink to={props.to}>
            <h3 style={styles.link} {...props}>
                <b>{props.text}</b>
            </h3>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {
    link: {
        cursor: 'pointer',
    },
};

export default Link;

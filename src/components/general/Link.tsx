import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
    containerStyle?: React.CSSProperties;
    outsideTo?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const navigate = useNavigate();

    // get current location of react router
    const location = window.location.pathname;

    const [active, setActive] = React.useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setActive(true);
        if (location !== `/${props.to}`) {
            setTimeout(() => {
                navigate(`/${props.to}`);
            }, 100);
        }
        setTimeout(() => {
            setActive(false);
        }, 100);
    };

    return (
        <RouterLink
            to={`/${props.to}`}
            onMouseDown={handleClick}
            style={props.containerStyle}
        >
            <h4
                className="router-link"
                style={Object.assign(
                    {},
                    styles.link,
                    active && { color: 'red' }
                )}
            >
                {props.text}
            </h4>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {
    link: {
        cursor: 'pointer',
        fontWeight: 'bolder',
        textDecoration: 'underline',
    },
};

export default Link;

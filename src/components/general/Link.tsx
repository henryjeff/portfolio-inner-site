import React, { useEffect, useState, useRef } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
    containerStyle?: React.CSSProperties;
    outsideTo?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isHere, setIsHere] = useState(false);
    const [active, setActive] = useState(false);

    // Ref to track mount status
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    // update indicator based on location
    useEffect(() => {
        setIsHere(location.pathname === `/${props.to}`);
    }, [location, props.to]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive(true);

        if (location.pathname !== `/${props.to}`) {
            setTimeout(() => {
                if (isMounted.current) {
                    navigate(`/${props.to}`);
                }
            }, 100);
        }

        setTimeout(() => {
            if (isMounted.current) {
                setActive(false);
            }
        }, 100);
    };

    return (
        <RouterLink
            to={`/${props.to}`}
            onMouseDown={handleClick}
            style={{
                display: 'flex',
                ...props.containerStyle,
            }}
        >
            {isHere && <div style={styles.hereIndicator} />}
            <h4
                className="router-link"
                style={{
                    ...styles.link,
                    ...(active && { color: 'red' }),
                }}
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
    hereIndicator: {
        width: 4,
        height: 4,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'rgb(85, 26, 139)',
        alignSelf: 'center',
        borderRadius: '50%',
        marginRight: 6,
        textDecoration: 'none',
    },
};

export default Link;

import React, { useState } from 'react';
import { IconName } from '../../assets/icons';
import Colors from '../../constants/colors';
import { Icon } from '../general';

export interface ButtonProps {
    icon?: IconName;
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const outerBorderStyle = Object.assign(
        {},
        styles.outerBorder,
        icon && { width: 16, height: 14 }
    );

    const innerBorderStyle = Object.assign(
        {},
        styles.innerBorder,
        icon && { width: 12, height: 12 },
        text && { padding: 4 }
    );

    const click = (e: any) => {
        e.preventDefault();
        onClick && onClick();
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={outerBorderStyle}
            onMouseDown={click}
            role="button" tabIndex={0} aria-label={text || (icon === 'close' ? 'Close window' : icon === 'minimize' ? 'Minimize window' : icon === 'maximize' ? 'Maximize or restore window' : icon)}
            onKeyDown={event => { if (!event.repeat && (event.key === 'Enter' || event.key === ' ')) click(event); }}
        >
            <div
                style={Object.assign(
                    {},
                    isHovering && { backgroundColor: Colors.darkGray },
                    innerBorderStyle
                )}
            >
                {icon && <Icon icon={icon} style={styles.icon} />}
                {text && (
                    // <Text noSelect style={styles.text}>
                    //     {text}
                    // </Text>
                    <p>{text}</p>
                )}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    outerBorder: {
        border: `1px solid ${Colors.black}`,
        borderTopColor: Colors.white,
        borderLeftColor: Colors.white,
        background: Colors.lightGray,

        cursor: 'pointer',
    },
    innerBorder: {
        border: `1px solid ${Colors.darkGray}`,
        borderTopColor: Colors.lightGray,
        borderLeftColor: Colors.lightGray,
        flex: 1,
    },
};

export default Button;

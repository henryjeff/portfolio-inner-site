import React from 'react';
import { IconName } from '../../assets/icons';
import Colors from '../../constants/colors';
import { Text, Icon } from '../general';

export interface ButtonProps {
    icon?: IconName;
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
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
        <div style={outerBorderStyle} onMouseDown={click}>
            <div style={innerBorderStyle}>
                {icon && <Icon icon={icon} style={styles.icon} />}
                {text && (
                    <Text noSelect style={styles.text}>
                        {text}
                    </Text>
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
        display: 'flex',
        cursor: 'pointer',
    },
    innerBorder: {
        border: `1px solid ${Colors.darkGray}`,
        borderTopColor: Colors.lightGray,
        borderLeftColor: Colors.lightGray,
        flex: 1,
        display: 'flex',
    },
};

export default Button;

declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

declare interface WindowAppProps {
    onClose: () => void;
    onInteract: () => void;
    onMinimize: () => void;
}

declare type DesktopWindows = {
    [key in string]: {
        zIndex: number;
        component: React.ReactElement;
        minimized: boolean;
        name: string;
        icon: IconName;
    };
};

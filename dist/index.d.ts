import React from 'react';
interface Iavatar {
    style?: React.CSSProperties;
    className?: string;
    alt?: string;
    src?: string;
    name?: string;
    size?: 'large' | 'small' | 'default';
    shape?: 'circle' | 'square';
    icon?: boolean;
    randomColor?: boolean;
    children?: React.ReactNode;
}
export declare const Avatar: (props: Iavatar) => JSX.Element;
export {};

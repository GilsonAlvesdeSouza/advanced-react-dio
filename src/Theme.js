import {createContext} from 'react';

export const themes = {
    primary: {
        background: '#000',
        color: '#efefef',
    },
    secondary: {
        background: '#008',
        color: '#efefef',
    }
};

export const ThemeContext = createContext(themes.secondary);
import React, {useEffect, useState} from 'react';
import {ThemeContext, themes} from "../Theme";
import {Card} from "../components";
import {ThemeProvider} from 'styled-components';

export function App() {
    const [token, setToken] = useState();

    useEffect(() => {
        setTimeout(() => {
            setToken("6asdf5.6asd5f.66asd");
        }, 2000);
    }, [token]);

    return (
        <ThemeProvider theme={themes}>
            <ThemeContext.Provider value={{...themes.primary, token}}>
                <Card/>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
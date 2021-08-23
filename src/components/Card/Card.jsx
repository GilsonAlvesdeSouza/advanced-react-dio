import React, {useContext} from 'react';
import {ThemeContext} from "../../Theme";
import Form from "../Form/Form";

export function Card(props) {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <Form/>
            <button style={{background: theme.background, color: theme.color}}>Card Button</button>
        </div>
    );
}

export default Card;
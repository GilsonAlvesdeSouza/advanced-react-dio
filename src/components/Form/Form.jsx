import React, {useContext} from 'react';
import {ThemeContext} from "../../Theme";
import {Container, FormStyle, InputStyle, LabelStyle} from "./form-styles";

export function Form() {

    const context = useContext(ThemeContext);

    const
        renderForm = (
            <Container>
                <FormStyle>
                    <LabelStyle>Nome: </LabelStyle>
                    <InputStyle/>
                    <LabelStyle>E-mail: </LabelStyle>
                    <InputStyle/>
                    <LabelStyle>Idade: </LabelStyle>
                    <InputStyle/>
                    <LabelStyle>Telefone: </LabelStyle>
                    <InputStyle/>
                </FormStyle>
            </Container>
        );

    const renderNotLogged = (
        <h1>É necessário realizar o login!</h1>
    );

    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    );
}

export default Form;
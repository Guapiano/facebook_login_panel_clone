import React from 'react';
import logo from '../../assets/logo.png';
import Form from '../../components/login-form/LoginForm';
import {Container,Logo,FacebookParagraph,LogoAndTextSide,FormSide, NewParagraph, Bold} from './LoginScreenStyle';

export default function Login(){

    return(
        <Container>
            <LogoAndTextSide>
                <Logo src={logo}/>
                <FacebookParagraph>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</FacebookParagraph>
            </LogoAndTextSide>
            <FormSide>
                <Form></Form>
                <NewParagraph><Bold>Criar uma página</Bold> para uma celebridade, banda ou empresa.</NewParagraph>
            </FormSide>
        </Container>
    )
}
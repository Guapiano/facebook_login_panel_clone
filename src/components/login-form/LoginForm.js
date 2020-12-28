import React from 'react';
import {FormContainer,FormInput,SignInButton,OrText,ForgotPassword,SignUpButton} from './LoginFormStyle';

export default function Form(){
    return(
        <FormContainer>
            <FormInput 
            placeholder="Email ou telefone"
            />
            <FormInput 
            placeholder="Senha"
            />
            <SignInButton>Entrar</SignInButton>
            <OrText>Ou</OrText>
            <SignUpButton>Criar sua conta</SignUpButton>
            <ForgotPassword 
            href="#">Esqueceu a senha?</ForgotPassword>
        </FormContainer>
    )
}
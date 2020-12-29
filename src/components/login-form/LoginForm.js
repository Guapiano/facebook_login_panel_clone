import React from 'react';
import {FormContainer,FormInput,SignInButton,OrText,ForgotPassword,SignUpButton} from './LoginFormStyle';

export default function Form(){

    return(
        <FormContainer>
            <FormInput 
            type="email"
            placeholder="Email ou telefone"
            />
            <FormInput 
            type="password"
            placeholder="Senha"
            />
            
            <SignInButton 
            type="submit">Entrar
            </SignInButton>

            <OrText>Ou</OrText>

            <SignUpButton 
            type="submit">Criar sua conta
            </SignUpButton>

            <ForgotPassword 
            href="#">Esqueceu a senha?
            </ForgotPassword>
        </FormContainer>
    )
}
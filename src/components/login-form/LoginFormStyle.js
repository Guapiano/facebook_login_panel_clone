import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 350px;
    height: 370px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 25px;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0.5px #ebebeb;
    @media(max-width: 380px){
        width: 90%;
        height: 350px;
    }
`;

export const FormInput = styled.input`
    width: 90%;
    border: none;
    height: 50px;
    padding: 10px;
    border-width: 1px;
    border-radius: 4px;
    border-style: solid;
    margin-bottom: 15px;
    border-color: #dbdbdb;
    ::placeholder{
        color: #dbdbdb;
    } 
`;

export const SignInButton = styled.button`
    width: 90%;
    color: #fff;
    height: 50px;
    border: none;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 15px;
    background-color: #0078FF;
`;

export const OrText = styled.p`
    margin-bottom: 15px;
`;

export const SignUpButton = styled.button`
    width: 90%;
    color: #fff;
    height: 50px;
    border: none;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 25px;
    background-color: #49d159; 
`;

export const ForgotPassword = styled.a`
    color: #0078FF;
`;
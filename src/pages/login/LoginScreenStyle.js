import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    margin: 0 auto;
    max-width: 1150px;
    align-items: center;
    justify-content: space-around;
`;

export const LogoAndTextSide = styled.div``;

export const Logo = styled.img`
    width: 220px;
    margin-bottom: 15px;
    @media(max-width: 380px){
        display: none;
    }
    @media(max-width: 1010px){
        display: none;
    }
`;

export const FacebookParagraph = styled.p`
    font-size: 18px;
    max-width: 400px;
    text-align: justify;
    @media(max-width: 380px){
        display: none;
    }
    @media(max-width: 1010px){
        display: none;
    }
`;

export const FormSide = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 380px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 1010px){
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NewParagraph = styled.p`
    color: #737373;
    font-size: 14px;
    max-width: 300px;
    text-align: center;
    align-self: center;
`;

export const Bold = styled.b`
    color: #000;
`;
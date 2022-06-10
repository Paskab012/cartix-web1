import React from 'react';
import styled from 'styled-components';
import image from '../../../assets/signup.svg';
import { media } from '../../../mediaQueries/projectBreakPoints';
import Input from './Input';

const Background = styled.div`
    min-width: 100%;
    min-height: 100%;
    background-color: #f2f2f2;
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
`;

const Logo = styled.img`
    object-fit: cover;
    width: 100vw;
    max-height: 100vh;
    align-items: center;
    mix-blend-mode: lighten;
    opacity: 1;
    position: absolute;

    ${media.xxl`
       width:100%;
    `};
`;

const Login = () => {
    return (
        <Background>
            <Logo src={image} />
            <Input />
        </Background>
    );
};

export default Login;

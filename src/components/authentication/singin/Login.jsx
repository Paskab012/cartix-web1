import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import image from '../../../assets/signup.svg';
import { media } from '../../../mediaQueries/projectBreakPoints';
import { login, loginOtp } from '../../../redux/actions/auth';
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
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const handleLogin = () => {
        const email = 'makutanolucien@gmail.com';
        const password = '&hg57AS45Ap';
        // console.log('CallLogin action');
        login(email, password)(dispatch);
    };

    const handleLoginOtp = () => {
        const token = auth.token
        const code = "agdajsdeyu23"
        // console.log('CallLogin action');
        loginOtp(token, code)(dispatch);
    };
    console.log(auth);
    return (
        <Background>
            <Logo src={image} />
            <Input handleLogin={handleLogin} />
        </Background>
    );
};

export default Login;

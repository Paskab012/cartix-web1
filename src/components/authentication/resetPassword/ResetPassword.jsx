import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import image from '../../../assets/signup.svg';
import picture from '../../../assets/bnr.svg';
import { FormInput } from './FormInput';
import { Link, Navigate } from 'react-router-dom';
import { reset_password } from '../../../redux/actions/auth';

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
`;

const Container = styled.div`
    width: 40%;
    background-color: white;
    height: 400px !important;
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #88714e;
    height: 94px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
    border-radius: 5px 5px 0px 0px;
    position: absolute;
    width: 40%;
`;

const Header = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Picture = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`;

const SmallLogo = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-left: -180px;
`;

const Small = styled.span`
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.015em;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 18px;
    line-height: 21.94px;
    letter-spacing: 1.5px;
    font-weight: 600;
    position: relative;
    margin-top: calc(94px);
`;

const FormContainer = styled.div`
    width: 88%;
    height: 100%;
    margin: 6%;
    display: flex;
    flex-direction: column;
`;

const MyForm = styled.form`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Button = styled.button`
    width: 35%;
    background-color: #3981ed;
    color: white;
    border-radius: 5px;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
`;

const Login = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #3981ed;
    text-decoration-line: underline;
    cursor: pointer;
`;
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 15px;
    transition: 0.2s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    &:hover {
        transition: 0.2s all ease-in-out;
        color: #753918;
        font-weight: 600;
    }
`;

const ResetPassword = ({ reset_password }) => {
    const dispatch = useDispatch();
    const [requestSent, setRequestSent] = useState(false);
    const [values, setValues] = useState({
        email: '',
    });

    const Inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'input email',
            errorMessage: 'Please enter a valid email adress to reset your password',
            label: 'Email',
            required: true,
        },
    ];

    const { email } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        reset_password(email)(dispatch);
        setRequestSent(true);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    if (requestSent) {
        return <Navigate to="/" />;
    }
    return (
        <Background>
            <Logo src={image} />
            <Container>
                <Content>
                    <Header>
                        <Picture src={picture} />
                        <SmallLogo>
                            BNR <Small>CSGs Data Map</Small>
                        </SmallLogo>
                    </Header>
                </Content>
                <FormContainer>
                    <Title>Reset your password!</Title>
                    <MyForm onSubmit={handleSubmit}>
                        {Inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <ButtonContainer>
                            <Button onClick={handleSubmit}>Reset password</Button>
                            <StyledLink to="/login">
                                <Login>Back</Login>
                            </StyledLink>
                        </ButtonContainer>
                    </MyForm>
                </FormContainer>
            </Container>
        </Background>
    );
};

export default connect(null, { reset_password })(ResetPassword);

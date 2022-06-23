import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../../../assets/signup.svg';
import { media } from '../../../mediaQueries/projectBreakPoints';
import { useDispatch, useSelector } from 'react-redux';

import picture from '../../../assets/bnr.svg';
import { Link, Navigate } from 'react-router-dom';

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

const Container = styled.div`
    width: 28%;
    background-color: white;
    height: 80% !important;
    border-radius: 5px;
    color: black;
    display: flex;
    justify-content: center;

    ${media.md`
      height: 650px;
  `}

    ${media.xl`
      height: 750px;
  `}
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
    width: 28%;
`;

const Header = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${media.xl`
    font-size: 22px;
    margin-left: -10px;
      `}
`;

const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

const LogoHeader = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-left: -10px;

    ${media.md`
    font-size: 18px;
      `}

    ${media.xl`
        font-size: 22px;
      `}
`;

const Small = styled.span`
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.015em;
    text-align: left;

    ${media.md`
    font-size: 18px;
      `}
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
    margin: 4%;
    display: flex;
    flex-direction: column;
`;

const MyForm = styled.form`
    width: 100%;
    /* background-color: chocolate; */
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Button = styled.button`
    width: 70%;
    background-color: #3981ed;
    color: white;
    border-radius: 5px;
    padding: 12px 20px;
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

const Label = styled.label`
    font-size: 13.5px;
    line-height: 17px;
    margin-bottom: 1%;
`;

const Form = styled.div`
    display: grid;
    position: relative;
    margin: 3.78% 0;
`;

const ErrorMessage = styled.span`
    font-size: 12px;
    color: white;
    border-radius: 2px;
    font-weight: semi-bold;
    display: none;
    position: absolute;
    background-color: red;
    width: 100%;
`;

const InputField = styled.input`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 9px 11px;
    gap: 10px;
    border: 1.2px solid #dee1e7;
    border-radius: 4px;

    ::placeholder {
        color: #9da1a8;
        font-size: 13px;
    }

    &:invalid ~ ${ErrorMessage} {
        display: block;
    }
    /* &:focused(true) {
        display: block;
    } */
`;

const InputFieldSelect = styled.select`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 9px 11px;
    gap: 10px;
    border: 1.2px solid #dee1e7;
    border-radius: 4px;

    ::placeholder {
        color: #9da1a8;
        font-size: 12px;
    }

    &:invalid ~ ${ErrorMessage} {
        display: block;
    }
    /* &:focused(true) {
        display: block;
    } */
`;

const InputOption = styled.option`
    background-color: red;
    color: white;
    border: solid 1px red;
`;

const SignUp = () => {
    const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({
        ngoName: '',
        ngoType: '',
        fullNames: '',
        position: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignup = (e) => {
        e.preventDefault();
        // login(email, password)(dispatch);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <Background>
            <Logo src={image} />
            <Container>
                <Content>
                    <Header>
                        <Picture src={picture} />
                        <LogoHeader>
                            BNR <Small>CSGs Data Map</Small>
                        </LogoHeader>
                    </Header>
                </Content>
                <FormContainer>
                    <Title>NGO Sign Up</Title>
                    <MyForm onSubmit={handleSubmit}>
                        <Form>
                            <Label>NGO name</Label>
                            <InputField
                                id="1"
                                name="ngoName"
                                type="text"
                                placeholder="select your NGO name"
                                errorMessage="Please select your NGO"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>NGO type</Label>
                            <InputFieldSelect
                                classname="js-example-basic-single"
                                id="1"
                                name="ngoName"
                                type="text"
                                placeholder="select your NGO type"
                                errorMessage="Please select your NGO"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                /* onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)} */
                                focused={focused.toString()}
                            >
                                <InputOption value="Pam">Pam</InputOption>
                                <InputOption value="Unicef">Unicef</InputOption>
                                <InputOption value="Croix rouge">Croix rouge</InputOption>
                                <InputOption value="Save children">Save Children</InputOption>
                            </InputFieldSelect>
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>Full name</Label>
                            <InputField
                                id="3"
                                name="fullName"
                                type="text"
                                placeholder="input name"
                                errorMessage="Your names should be 5-25 characters and should not include any special character"
                                label="Full names"
                                pattern="^[A-Za-z0-9]{5,25}$"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>Full name</Label>
                            <InputField
                                id="4"
                                name="position"
                                type="text"
                                placeholder="input position"
                                errorMessage="Please input your position"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>Email</Label>
                            <InputField
                                id="5"
                                name="email"
                                type="email"
                                placeholder="input email"
                                errorMessage="Please input a valid email"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>Password</Label>
                            <InputField
                                id="6"
                                name="password"
                                type="password"
                                placeholder="input password"
                                errorMessage="Please input your password"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <Form>
                            <Label>Confirm Passwoord</Label>
                            <InputField
                                id="7"
                                name="password"
                                type="password"
                                placeholder="re-type your password"
                                errorMessage="Please input a strong password"
                                required="true"
                                onChange={(e) => onChange(e)}
                                onBlur={handleFocus}
                                className="inputs"
                                // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                                focused={focused.toString()}
                            />
                            {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
                        </Form>
                        <ButtonContainer>
                            <Button type="submit" onClick={handleSignup}>
                                Submit sign up request
                            </Button>
                            <StyledLink to="/login">
                                <Login>Login</Login>
                            </StyledLink>
                        </ButtonContainer>
                    </MyForm>
                </FormContainer>
            </Container>
        </Background>
    );
};

export default SignUp;

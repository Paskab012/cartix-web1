import React, { useState } from 'react';
import styled from 'styled-components';
import picture from '../../../assets/bnr.svg';
import { media } from '../../../mediaQueries/projectBreakPoints';
import { FormInput } from './FormInput';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 28%;
    background-color: white;
    height: 400px !important;
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;

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

const Logo = styled.h1`
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
    width: 100%;
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
    width: 32%;
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
        font-weight: normal;
        color: red;
    }
`;
const Input = () => {
    const [values, setValues] = useState({
        ngoName: '',
        fullNames: '',
        position: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const Inputs = [
        {
            id: 4,
            name: 'email',
            type: 'email',
            placeholder: 'input email',
            errorMessage: 'Please enter a valid email adress',
            label: 'Email',
            required: true,
        },
        {
            id: 5,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage:
                'Please enter a 8-20 characters and it should inlude at least 1 letter, 1 number and 1 special character!',
            label: 'Set password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);
    return (
        <Container>
            <Content>
                <Header>
                    <Picture src={picture} />
                    <Logo>
                        BNR <Small>CSGs Data Map</Small>
                    </Logo>
                </Header>
            </Content>
            <FormContainer>
                <Title>Admin login</Title>
                <MyForm>
                    {Inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <ButtonContainer>
                        <StyledLink to="/savings-group-map">
                            <Button>Log in</Button>
                        </StyledLink>
                        <StyledLink to="/reset-password">
                            <Login>Reset password</Login>
                        </StyledLink>
                    </ButtonContainer>
                </MyForm>
            </FormContainer>
        </Container>
    );
};
export default Input;

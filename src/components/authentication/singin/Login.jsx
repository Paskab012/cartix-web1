import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import picture from '../../../assets/bnr.svg';
import { FormInput } from './FormInput';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import image from '../../../assets/signup.svg';
import { login } from '../../../redux/actions/auth';
import SnipperLoginBtn from './SpinnerLoginBtn';

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
    width: 28%;
    background-color: white;
    height: 50% !important;
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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.03);
    border-radius: 5px 5px 0 0;
    position: absolute;
    width: 28%;
`;

const Header = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

// const Logo = styled.h1`
//     font-weight: bold;
//     font-size: 22px;
//     margin-left: -10px;

//     ${media.md`
//     font-size: 18px;
//       `}

//     ${media.xl`
//         font-size: 22px;
//       `}
// `;

const Small = styled.span`
    font-family: Montserrat, sans-serif;
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
    /* background-color: aqua; */
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

// const Button = styled.button`
//     width: 100%;
//     background-color: #3981ed;
//     color: white;
//     border-radius: 5px;
//     padding: 12px 20px;
// `;

const LogoHeader = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-left: -10px;
`;

const Paragraph = styled.p`
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
    }
`;

const Login = ({ login, isAuthenticated }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const redirectTo = (to = '/', options = { replace: true }) => navigate(to, options);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { email, password } = formData;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            login(email, password, setIsLoading, redirectTo);
        }
    };

    if (isAuthenticated) return <Navigate to="/activate" />;

    const Inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Enter email',
            errorMessage: 'Please enter a valid email address',
            label: 'Email',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage:
                'Please enter a 8-20 characters and it should include at least 1 letter, 1 number and 1 special character!',
            label: 'Input password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true,
        },
    ];
    return (
        <Background>
            <Logo src={image} />
            <Container>
                <Content>
                    <Header>
                        <Picture src={picture} />
                        <Logo />
                        <LogoHeader>
                            BNR <Small>CSGs Data Map</Small>
                        </LogoHeader>
                    </Header>
                </Content>
                <FormContainer>
                    <Title>Admin login</Title>
                    <MyForm onSubmit={(e) => onSubmit(e)}>
                        {Inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={formData[input.name]}
                                onChange={(e) => onChange(e)}
                            />
                        ))}
                        <ButtonContainer>
                            <SnipperLoginBtn
                                loading={isLoading}
                                type="submit"
                                title={'Login'}
                            ></SnipperLoginBtn>
                            <StyledLink to="/reset-password">
                                <Paragraph>Reset password</Paragraph>
                            </StyledLink>
                        </ButtonContainer>
                    </MyForm>
                </FormContainer>
            </Container>
        </Background>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

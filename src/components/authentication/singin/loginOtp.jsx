import React, { useState } from 'react';
import { loginOtp } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styled from 'styled-components';
import picture from '../../../assets/bnr.svg';
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

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const TextColor = styled.div`
    background-color: white;
    width: 40%;
    height: 45%;
    text-align: center;
    align-items: center;
    position: absolute;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`;

const Title = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: #88714e;
    padding: 4%;
    border-radius: 5px 5px 0 0;
`;

const Paragraphe = styled.h2`
    font-size: 13px;
    font-weight: normal;
    margin: 2.5%;
`;

const OtpInput = styled.input`
    background-color: #f2f2f2;
    font-size: 13px;
    font-weight: normal;
    margin: 1.4%;
    width: 6%;
    height: 10%;
    padding-left: 5%;
    border-radius: 3px;
    outline: none;
    border: white;
    border-bottom: solid 1px #88714e;
    cursor: pointer;
`;

const ClearBtn = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    padding: 1rem 2rem;
    height: 3.25rem;
    background-color: red;
    color: white;
    margin-right: 3%;
    cursor: pointer;
`;

const VerifyBtn = styled.button`
    border: none;
    border-radius: 5px;
    padding: none;
    background-color: #3981ed;
    color: white;
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

const EnteredOtp = styled.p`
    margin: 2%;
`;
const LoginOTP = ({ isAuthenticated }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [otpData, setOtpData] = useState({
        token: '',
        code: '',
    });

    const { token, code } = otpData;

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleLoginOtp = () => {
        // const token = auth.token;
        // const code = 'agdajsdeyu23';
        // console.log('CallLogin action');
        loginOtp(token, code)(dispatch);
    };

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {/* <Header title="Building OTP box using Hooks" /> */}

            {/* <ExternalInfo page="otpBox" /> */}
            <Background>
                <Container className="row">
                    <Logo src={picture} />
                    <TextColor className="text-center col">
                        <Title>OTP verification code!</Title>
                        <Paragraphe>
                            Enter the OTP sent into your email to verify your identity...
                        </Paragraphe>

                        {otp.map((data, index) => {
                            return (
                                <OtpInput
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                />
                            );
                        })}

                        <EnteredOtp>OTP Entered - {otp.join('')}</EnteredOtp>
                        <Paragraphe>The verification code will be expired in 5mins</Paragraphe>
                        <p>
                            <ClearBtn
                                className="mr-2 btn btn-secondary"
                                onClick={(e) => setOtp([...otp.map((v) => '')])}
                            >
                                Clear
                            </ClearBtn>
                            <VerifyBtn>
                                <SnipperLoginBtn
                                    className="btn btn-primary"
                                    loading={loading}
                                    onClick={(e) => {
                                        alert('Entered OTP is ' + otp.join(''));
                                        setTimeout(() => {
                                            setLoading(false);
                                        }, 2000);
                                        handleLoginOtp();
                                    }}
                                    type="submit"
                                    title={'Verify account'}
                                >
                                    Verify account
                                </SnipperLoginBtn>
                            </VerifyBtn>
                        </p>
                    </TextColor>
                </Container>
            </Background>
        </>
    );
};

export default LoginOTP;

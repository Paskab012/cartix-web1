import React, { useState } from 'react';

const LoginOTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            {/* <Header title="Building OTP box using Hooks" /> */}

            {/* <ExternalInfo page="otpBox" /> */}

            <div className="row">
                <div className="text-center col">
                    <h2>OTP verification code!</h2>
                    <p>Enter the OTP sent into your email to verify your identity...</p>

                    {otp.map((data, index) => {
                        return (
                            <input
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

                    <p>OTP Entered - {otp.join('')}</p>
                    <p>
                        <button
                            className="mr-2 btn btn-secondary"
                            onClick={(e) => setOtp([...otp.map((v) => '')])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={(e) => alert('Entered OTP is ' + otp.join(''))}
                        >
                            Verify account
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginOTP;

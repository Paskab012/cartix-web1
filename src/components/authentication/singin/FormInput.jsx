import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 14px;
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
    width: 90%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 13px 15px;
    gap: 10px;
    border: 1.2px solid #dee1e7;
    border-radius: 4px;

    ::placeholder {
        color: #9da1a8;
        font-size: 14px;
    }

    &:invalid ~ ${ErrorMessage} {
        display: block;
    }
    /* &:focused(true) {
        display: block;
    } */
`;

export const FormInput = (props) => {
    const [focused, setFocused] = useState(false);

    const { label, onchange, errorMessage, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <>
            <Form>
                <Label>{label}</Label>
                <InputField
                    {...inputProps}
                    onchange={onchange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                    focused={focused.toString()}
                />
                {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
            </Form>
        </>
    );
};

import React from 'react';
import styled from 'styled-components';
import SavingGroupAnalytics from './LineChart';

const Container = styled.div`
    background-color: aqua;
`;

const InputFieldSelect = styled.select`
    width: 69%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3%;
    border: none;
    border-radius: 4px;
    text-align: start;
    font-size: 14px;

    ::placeholder {
        color: black;
        font-size: 12px;
    }
`;

const InputOption = styled.option`
    background-color: red;
    color: white;
    border: solid 1px red;
`;

const InputField = styled.div`
    padding: 2%;
    color: black;
    border: none;
`;

function Chart() {
    return (
        <>
            <Container>
                <InputField>
                    <InputFieldSelect
                        classname="js-example-basic-single"
                        id="0"
                        name="country"
                        type="text"
                        placeholder="Year :"
                        className="inputs"
                    >
                        <InputOption value="Saving groups analytics">
                            Saving groups analytics
                        </InputOption>
                        <InputOption value="Financial institution analytics">
                            Financial Institution analytics
                        </InputOption>
                        <InputOption value="Agent analytics">Agent analytics</InputOption>
                        <InputOption value="Finscope analytics">Finscope analytics</InputOption>
                    </InputFieldSelect>
                </InputField>
                <SavingGroupAnalytics />
            </Container>
        </>
    );
}

export default Chart;

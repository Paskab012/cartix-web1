import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: aqua;
`;

const InputFieldSelect = styled.select`
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3%;
    border: 1.2px solid #dee1e7;
    border-radius: 4px;
    text-align: start;

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
`

function Chart() {
    return (
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
                    <InputOption value="2022">Year :2022</InputOption>
                    <InputOption value="2021">Year :2021</InputOption>
                    <InputOption value="2020">Year :2020</InputOption>
                    <InputOption value="2019">Year :2019</InputOption>
                    <InputOption value="2018">Year :2018</InputOption>
                    <InputOption value="2017">Year :2017</InputOption>
                </InputFieldSelect>
            </InputField>
        </Container>
    );
}

export default Chart;

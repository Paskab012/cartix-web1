import React from 'react';
import styled from 'styled-components';

function DistrictFilterHelper() {
    const Container = styled.div`
        width: 32%;
        z-index: 999;
    `;
    const InputFieldSelect = styled.select`
        width: 88%;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        border: 0.1px solid #dee1e7;
        border-radius: 4px;
        text-align: center;
        font-size: 11px;
        color: #9da1a8;
    `;
    const InputOption = styled.option`
        background-color: red;
        color: white;
        border: solid 1px red;
        font-weight: bolder;
    `;

    const Small = styled.span`
        background-color: red;
    `;

    return (
        <Container>
            <InputFieldSelect
                classname="js-example-basic-single"
                id="0"
                name="country"
                type="text"
                placeholder="Province :"
                className="inputs"
            >
                <InputOption value="2022">
                    District <Small style={{ fontWeight: 700 }}>: All</Small>
                </InputOption>
                <InputOption value="2021">Nyamagabe </InputOption>
                <InputOption value="2020">Kamembe</InputOption>
                <InputOption value="2019">Nyamasheke Province</InputOption>
                <InputOption value="2018">Rubavu </InputOption>
                <InputOption value="2017">Ngororero </InputOption>
            </InputFieldSelect>
        </Container>
    );
}

export default DistrictFilterHelper;

import React from 'react';
import styled from 'styled-components';

function SavingGroupsFilter() {
    const Container = styled.div`
        width: 38%;
        z-index: 999;
    `;
    const InputFieldSelect = styled.select`
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        border: 0.1px solid #dee1e7;
        border-radius: 4px;
        text-align: center;
        font-size: 11px;
        color: #9DA1A8;
    `;
    const InputOption = styled.option`
        background-color: red;
        color: white;
        border: solid 1px red;
        font-weight: bolder;
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
                <InputOption value="2022">Saving Groups : All</InputOption>
                <InputOption value="2021">Kigali town</InputOption>
                <InputOption value="2020">Easten Province</InputOption>
                <InputOption value="2019">Northen Province</InputOption>
                <InputOption value="2018">Westen Province</InputOption>
                <InputOption value="2017">Southen Province</InputOption>
            </InputFieldSelect>
        </Container>
    );
}

export default SavingGroupsFilter;

import React from 'react';
import styled from 'styled-components';
import DataNav from './DataNavbar';
import SavingsCreditgroupsdata from './Savings&Creditgroupsdata';

const Container = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
`;

const Data = () => {
    return (
        <>
            <DataNav />
            <Container>
                <SavingsCreditgroupsdata />
            </Container>
        </>
    );
};

export default Data;

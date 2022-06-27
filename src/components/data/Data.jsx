import React from 'react';
import styled from 'styled-components';
import DataNav from './DataNavbar';
import SavingsCreditgroupsdata from './ConsentForm';
import SavingGroupsTable from './tables/ConsentFormTable';

const Container = styled.section`
    background-color: #f2f2f2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Data = () => {
    return (
        <>
            <DataNav />
            <Container>
                <SavingsCreditgroupsdata />
                <SavingGroupsTable />
            </Container>
        </>
    );
};

export default Data;

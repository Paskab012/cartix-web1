import React from 'react';
import styled from 'styled-components';
import MyGraph from '../../../../assets/graph.svg';
import MyGraphCircle from '../../../../assets/circle.svg';

const Container = styled.div`
    background-color: white;
    padding: 4%;
`;

const Graph = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
function SavingGroupAnalytics() {
    return (
        <Container>
            <Graph src={MyGraph} />
            <Graph src={MyGraphCircle} />
        </Container>
    );
}

export default SavingGroupAnalytics;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 96%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: white;
    height: 818px;
    border-radius: 3px;
    margin-left: 2%;
    position: absolute;
    margin-top: 15%;
`;

const Left = styled.div`
    background-color: gray;
    width: 55%;
    padding: 2%;
    height: 100%;
`;

const CardMap = styled.img`
    width: 100%
    object-fit: cover;
`;

const Right = styled.div`
    width: 45%;
`;

const Diagrams = styled.img`
    width: 100%;
`;
export const Rwanda = () => {
    return (
        <Container>
            <Left>
                <CardMap></CardMap>
            </Left>
            <Right>
                <Diagrams />
            </Right>
        </Container>
    );
};

import React from 'react';
import styled from 'styled-components';
import map from '../../../assets/mappage.png';
import chart from '../../../assets/groups.png';
import InteractiveCart from './interactive.cart';

const Container = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    height: 818px;
    border-radius: 3px;
    margin-left: 2%;
    position: absolute;
    margin-top: 15%;
`;

const Left = styled.div`
    background-color: white;
    width: 68%;
    height: 90%;
    padding: 1rem;
    border-radius: 5px;
    position: relative;
`;

const CardMap = styled.img`
    width: 100%
    object-fit: contain;
    height: 100%;
    mix-blend-mode: luminosity;
`;

const Right = styled.div`
    width: 30%;
    height: 100vh;
`;

const Diagrams = styled.img`
    width: 100%;
    height: 70%;
`;
export const Rwanda = () => {
    return (
        <Container>
            <Left>
                <CardMap src={map} />
                <InteractiveCart />
            </Left>
            <Right>
                <Diagrams src={chart} />
            </Right>

        </Container>
    );
};

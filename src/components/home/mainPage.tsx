import React from 'react';
import styled from 'styled-components';
import AnimatedBack from '../animations/AnimatedBack';

import Nav from '../header/Navigation';
import map from '../../assets/map.png';
import rwandaProvinces from '../../assets/groupMap.png';
import Feature from '../features/Features';
import Methodology from '../features/methodology';
import Fiddings from '../features/Fidings';

const Container = styled.div`
    height: calc(100vh - 85px);
    display: flex;
`;

const Left = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    width: 60%;
    font-size: 40px;
    height: 108px;
    top: 313px;
    border-radius: nullpx;
    color: #753918;
    font-weight: 700;
    line-height: 54px;
`;

const Paragraphe = styled.p`
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    line-height: 30px;
    width: 60%;
    margin-top: 20px;
`;

const Right = styled.div`
    width: 45%;
    display: flex;
`;

const MapBackground = styled.img`
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    opacity: 0.9;
`;

const Provices = styled.img`
    width: 100%;
    height: 80%;
    left: 0;
    object-fit: cover;
    display: flex;
    z-index: 1;
    margin-left: -50rem;
    margin-top: 7rem;
`;

export const MainPage = () => {
    return (
        <>
            <Nav />
            <Container>
                <AnimatedBack />

                <Left>
                    <Title>Welcome to the Savings Groups Map</Title>
                    <Paragraphe>
                        Through this online mapping tool, users will quickly discover patterns,
                        relationships, and trends in a more quantifiable fashion and analyze the
                        unique characteristics that make Rwanda's financial sector from the supply
                        end.
                    </Paragraphe>
                </Left>
                <Right>
                    <MapBackground src={map} />
                    <Provices src={rwandaProvinces} />
                </Right>
            </Container>
            <Feature />
            <Methodology />
            <Fiddings />
        </>
    );
};

export default MainPage;

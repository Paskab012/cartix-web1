import React from 'react';
import styled from 'styled-components';
import DoubleIcon from '../../../assets/double.svg';
import SingleIcon from '../../../assets/single.svg';
import Hand from '../../../assets/hand.svg';
import Bank from '../../../assets/bank2.svg';
import Cloud from '../../../assets/nuage.svg';
import Coins from '../../../assets/coins.svg';

const Container = styled.section`
    width: 96%;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 25%;
    border-radius: 3px;
    margin-top: 1%;
    position: absolute;
    margin-left: 2%;
    background-color: white;
`;

const TitleElement = styled.h3`
    font-size: 18px;
    line-height: 21.94px;
    font-weight: 700;
    color: black;
    margin: 3%;
    margin-bottom: 3%;
`;

const SmallBoxes = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    margin-left: 1.4%;
`;

const Boxes = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-left: 3%;
    padding-right: 8%;
    justify-content: center;
`;

const Title = styled.p`
    font-size: 12.75px;
    font-weight: normal;
    width: 100%;
`;
const Number = styled.h3`
    font-size: 15px;
    font-weight: 600;
    line-height: 23px;
`;

const MyBoxes = styled.img`
    display: flex;
    width: 54px;
    align-items: center;
`;

const BoxesDisplayFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const MapHeader = () => {
    return (
        <Container>
            <TitleElement>2022 Country Overview</TitleElement>
            <BoxesDisplayFlex>
                <SmallBoxes>
                    <MyBoxes src={DoubleIcon} />
                    <Boxes>
                        <Title>Total Groups</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes src={SingleIcon} />
                    <Boxes>
                        <Title>Total Members</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                <MyBoxes src={Coins} />
                    <Boxes>
                        <Title>Total Savings</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                <MyBoxes src={Hand} />
                    <Boxes>
                        <Title>Total outstanding...</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                <MyBoxes src={Bank} />
                    <Boxes>
                        <Title>Another Stat</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                <MyBoxes src={Cloud} />
                    <Boxes>
                        <Title>Another Stat</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
            </BoxesDisplayFlex>
        </Container>
    );
};

export default MapHeader;

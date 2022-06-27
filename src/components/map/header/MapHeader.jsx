import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    width: 96%;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 185px;
    border-radius: 3px;
    margin-top: 1%;
    position: absolute;
    margin-left: 2%;
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
`;

const Item = styled.span`
    width: 42px;
    height: 42px;
    background-color: #753918;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
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

const Circle = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    z-index: 1;
    margin: 0 auto;
`;

const MyBoxes = styled.div`
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
const Item1 = styled.span`
    width: 42px;
    height: 42px;
    background-color: #dba628;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
`;

const Item2 = styled.span`
    width: 42px;
    height: 42px;
    background-color: #88714e;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
`;

const Item3 = styled.span`
    width: 42px;
    height: 42px;
    background-color: #ac8a2f;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
`;

const Item4 = styled.span`
    width: 42px;
    height: 42px;
    background-color: #eccd8f;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
`;

const Item5 = styled.span`
    width: 42px;
    height: 42px;
    background-color: #f2dfb8;
    border-radius: 14.8571px;
    margin-right: 5%;
    position: absolute;
`;

const MapHeader = () => {
    return (
        <Container>
            <TitleElement>2022 Country Overview</TitleElement>
            <BoxesDisplayFlex>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item />
                    </MyBoxes>
                    <Boxes>
                        <Title>Total Groups</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item1 />
                    </MyBoxes>
                    <Boxes>
                        <Title>Total Members</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item2 />
                    </MyBoxes>
                    <Boxes>
                        <Title>Total Savings</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item3 />
                    </MyBoxes>
                    <Boxes>
                        <Title>Total outstanding Lo.</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item4 />
                    </MyBoxes>
                    <Boxes>
                        <Title>Another Stat</Title>
                        <Number>540,549</Number>
                    </Boxes>
                </SmallBoxes>
                <SmallBoxes>
                    <MyBoxes>
                        <Circle />
                        <Item5 />
                    </MyBoxes>
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

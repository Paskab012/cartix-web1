import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 197px;
`;

const Box = styled.div`
    display: flex;
    width: 958px;
    justify-content: space-between;
`;

const SmallRectanle = styled.span`
    width: 76px;
    height: 46.28px;
    left: 385px;
    top: 3527px;
    background-color: rgba(196, 196, 196, 0.3);
    border-radius: 7px;
`;

const BigRectangle = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Rectangle = styled.div`
    width: 210px;
    height: 46.28px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 7px;
    margin: 3%;
`;

const DisplayRectangle = styled.div`
    display: flex;
    flex-direction: column;
    width: 958px;
    justify-content: center;
    margin-left: calc(100% - 82.5%);
`;
export const Rectangles = () => {
    return (
        <Container>
            <DisplayRectangle>
                <Box>
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                </Box>
                <BigRectangle>
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                </BigRectangle>
                <Box>
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                    <SmallRectanle />
                </Box>
            </DisplayRectangle>
        </Container>
    );
};

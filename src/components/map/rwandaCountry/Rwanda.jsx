import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import map from '../../../assets/mappage.png';
import chart from '../../../assets/groups.png';
import InteractiveCart from './interactive.cart';
import Buttons from './zoomBtn';

const Container = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    height: 818px;
    border-radius: 3px;
    margin-left: 2%;
    position: absolute;
    margin-top: 16%;
`;

const Left = styled.div`
    background-color: #fff;
    width: 68%;
    height: 90%;
    border: 1rem solid #fff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`;

const CardMap = styled.img`
    width: 100%;
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
    const [imageSize, setImageSize] = useState({
        width: 739,
        height: 640,
    });

    let imgRef = useRef(null);
    return (
        <Container>
            <Left>
                <CardMap src={map} />
                <InteractiveCart imageSize={imageSize} imgRef={imgRef} />
                <Buttons imgRef={imgRef} setImageSize={setImageSize} />
            </Left>
            <Right>
                <Diagrams src={chart} />
            </Right>
        </Container>
    );
};

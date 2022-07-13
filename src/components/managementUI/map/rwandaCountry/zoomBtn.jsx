import React from 'react';
import styled from 'styled-components';
import Plus from '../../../../assets/Plus.svg';
import Minus from '../../../../assets/Minus.svg';
import InitZoom from '../../../../assets/initmap.png';
import Node from '../../../../assets/Node.png';
import Element from '../../../../assets/Element.png';
import Path from '../../../../assets/Path.svg';

const Container = styled.div`
    width: 55px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const ZoomButtons = styled.div`
    background: #151a23;
    border-radius: 10px;
    padding: 0.5rem;
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:first-child {
        height: 90px;
    }

    &:last-child {
        height: 130px;
    }
`;

const Buttons = ({ imgRef, setImageSize }) => {
    const handleZoomIn = () => {
        const height = imgRef.current.clientHeight;
        const width = imgRef.current.clientWidth;

        setImageSize({
            height: height + 10,
            width: width + 10,
        });
    };

    const handleZoomOut = () => {
        const initialHeight = imgRef.current.clientHeight;
        const initialWidth = imgRef.current.clientWidth;

        setImageSize({
            height: initialHeight - 10,
            width: initialWidth - 10,
        });
    };

    const handleInitialZoom = () => {
        setImageSize({
            height: 642,
            width: 739,
        });
    };

    return (
        <Container>
            <ZoomButtons>
                <span id="zoom-in" onClick={handleZoomIn}>
                    <img src={Plus} alt="img_icon" />
                </span>
                <span id="zoom-out" onClick={handleZoomOut}>
                    <img src={Minus} alt="img_icon" />
                </span>
            </ZoomButtons>
            <ZoomButtons id="zoom-init" onClick={handleInitialZoom}>
                <img src={InitZoom} alt="img_icon" />
            </ZoomButtons>
            <ZoomButtons>
                <span>
                    <img src={Node} alt="img_icon" />
                </span>
                <span>
                    <img src={Element} alt="img_icon" />
                </span>
                <span>
                    <img src={Path} alt="img_icon" />
                </span>
            </ZoomButtons>
        </Container>
    );
};

export default Buttons;

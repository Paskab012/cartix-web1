import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #753918;
    opacity: 0.7;
    position: obsolute;
    margin-top: -60px;
    margin-left: -60px;
    z-index: -1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to {
            transform: translate(50vw, 50vh);
        }
    }
`;

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #dba628;
    position: obsolute;
    margin-top: 200px;
    margin-left: -100px;
    z-index: -1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to {
            transform: translate(50vw, 50vh);
        }
    }
`;

const Reactangle = styled.div`
    width: 50px;
    height: 100px;
    background-color: #88714e;
    position: obsolute;
    margin-top: 400px;
    margin-left: -50px;
    z-index: -1;
    animation: rectangle 25s linear alternate infinite;

    @keyframes rectangle {
        to {
            transform: translate(50vw, -50vh);
        }
    }
`;

const AnimatedBack = () => {
    return (
        <>
            <Square />
            <Circle />
            <Reactangle />
        </>
    );
};

export default AnimatedBack;

import React from 'react';
import styled from 'styled-components';

import Nav from '../header/Navigation';

const Container = styled.div`
    height: calc(100vh - 85px);
    background-color: red;
    display: flex;
    padding: 20px;
`;

const Left = styled.div`
    width: 40%;
    font-
`;

const Right = styled.div`
    width: 60%;
`;

export const MainPage = () => {
    return (
        <>
            <Nav />
            <Container>
                <Left>LLLL</Left>
                <Right>rrr</Right>
            </Container>
        </>
    );
};

export default MainPage;

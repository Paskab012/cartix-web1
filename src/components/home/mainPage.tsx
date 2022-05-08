import React from 'react';
import styled from 'styled-components';

import Nav from '../header/Navigation';

const Container = styled.div`
    height: calc(100vh - 85px);
    background-color: red;
`;

export const MainPage = () => {
    return (
        <>
            <Nav />
            <Container>Introduction</Container>
        </>
    );
};

export default MainPage;

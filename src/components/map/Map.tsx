import React from 'react';
import styled from 'styled-components';
import Navbar from '../header/Navigation';

const Container = styled.div`
    margin: 0;
    padding: 0;
`;

function Map() {
    return (
        <>
            <Navbar />
            <Container>Here is where will go my map components</Container>
        </>
    );
}

export default Map;

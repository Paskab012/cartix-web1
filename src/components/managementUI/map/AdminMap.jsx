import React from 'react';
import styled from 'styled-components';
import MapHeader from './header/AdminMapHeader';
import MapNavbar from './AdminMapHeader';
import { Rwanda } from './rwandaCountry/Rwanda';

const Container = styled.section`
    z-index: -1;
    background-color: #f2f2f2;
    height: 140vh;
    overflow: hidden;
`;

function Map() {
    return (
        <Container>
            <MapNavbar />
            <MapHeader />
            <Rwanda />
        </Container>
    );
}

export default Map;

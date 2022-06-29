import React from 'react';
// import styled from 'styled-components';
import MapHeader from './header/MapHeader';
import MapNavbar from './MapHeader';
// import { Rwanda } from './rwandaCountry/Rwanda';

const Container = styled.div`
    background-color: white;
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

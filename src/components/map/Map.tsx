import React from 'react';
import styled from 'styled-components';
import MapHeader from './header/MapHeader';
import MapNavbar from './MapHeader';
import { Rwanda } from './rwandaCountry/Rwanda';

const Container = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    height: 100vh;
`;

function Map() {
    return (
        <>
            <MapNavbar />
            <MapHeader />
            <Container>
                <Rwanda />
            </Container>
        </>
    );
}

export default Map;

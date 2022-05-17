import React from 'react';
import styled from 'styled-components';
import MapHeader from './header/MapHeader';
import MapNavbar from './MapHeader';
import { Rwanda } from './rwandaCountry/Rwanda';

const MapContainer = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    min-height: 1000px;
    flex: 1;
`;

function Map() {
    return (
        <>
            <MapNavbar />
            <MapHeader />
            <MapContainer>
                <Rwanda />
            </MapContainer>
        </>
    );
}

export default Map;

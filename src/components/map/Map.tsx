import React from 'react';
import styled from 'styled-components';
import MapHeader from './header/MapHeader';
import MapNavbar from './MapHeader';
import { Rwanda } from './rwandaCountry/Rwanda';

`;

function Map() {
    return (
        <>
            <MapNavbar />
            <MapHeader />
        </>
    );
}

export default Map;

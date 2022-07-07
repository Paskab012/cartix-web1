import React from 'react';
import MapHeader from './header/MapHeader';
import MapNavbar from './MapHeader';
import { Rwanda } from './rwandaCountry/Rwanda';

function Map() {
    return (
        <>
            <MapNavbar />
            <MapHeader />
            <Rwanda/>
        </>
    );
}

export default Map;

import React from 'react';
import styled from 'styled-components';
import AdminMapHeader from './header/AdminMapHeader';
import AdminMapNavbar from './AdminMapNavbar';
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
            <AdminMapNavbar />
            <AdminMapHeader />
            <Rwanda />
        </Container>
    );
}

export default Map;

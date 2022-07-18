import React from 'react';
import styled from 'styled-components';
import ProvinceFilterHelper from './provinceFilterHelper';
import DistrictFilterHelper from './districtFilterHelper';
import SectorFilterHelper from './sectorFilterHelper';
import SavingGroupsFilter from './savingGroupsFilter';

function FilterHelper() {
    const Container = styled.div`
        width: 58%;
        display: flex;
        position: absolute;
        margin: 1rem;
        height: 5%;
    `;
    return (
        <Container>
            <ProvinceFilterHelper />
            <DistrictFilterHelper />
            <SectorFilterHelper/>
            <SavingGroupsFilter/>
        </Container>
    );
}

export default FilterHelper;

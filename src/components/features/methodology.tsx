import React from 'react';
import styled from 'styled-components';
import App from '../../assets/reactangle2.png';

const Container = styled.div`
    display: flex;
    background-color: #fff;
    height: 100vh;
    width: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const ActualDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 2rem;
    margin: 6%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 438px;
    height: 438px;
    margin-left: -4rem;
`;

const Right = styled.div`
    width: 50%;
    margin-right: 5%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Title = styled.span`
    font-size: 34px;
    font-weight: 600;
    color: #753918;
    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const Desc = styled.p`
    font-size: 15px;
    color: black;
    width: 100%;
    margin-bottom: 8px;
    line-height: 23px;
`;

const SubDescription = styled.h5`
    font-size: 15px;
    font-weight: bold;
`;

const Methodology = () => {
    return (
        <Container>
            <ActualDiv>
                <Left>
                    <Title>Methodology</Title>
                    <Desc>
                        In collaboration with the practitioners, all stakeholders selected 13 data
                        types to consider per saving groups during the mapping exercise. Those data
                        types include: SG location (Province, District and Sector), SG name, SG year
                        of creation, SG total membership (female & male members), International NGO
                        affiliation, Local NGO affiliation, SG status (graduated or supervised), SG
                        saved amount as of December 2018 and SG outstanding loan as of December
                        2018.
                        <br />
                        <br />
                        All practitioners compiled their data in the provided excel template and
                        uploaded their data through cartix platform. Cartix is embedded with machine
                        learning capabilities whereby it assisted practitioners by applying
                        auto-correct or flagging fields that needed to be revised. This feature
                        allowed practitioners to fast-track the data collection, compilation & data
                        validation phases simultaneously.Other financial datasets were also
                        considered, these datasets include: data on financial institutions (banks,
                        MFIs & SACCOs), data on mobile agents (Telco agents & bank agents) and
                        finally we used FinScope data (2012 & 2016 surveys). This allowed us to
                        contrast the informal financial sector with the formal financial sector to
                        get more insight on the current outlook from a data perspective.
                    </Desc>
                    <SubDescription>
                        The mapped datasets were collected between 2010 and 2018.
                    </SubDescription>
                </Left>
                <Right>
                    <Image src={App} />
                </Right>
            </ActualDiv>
        </Container>
    );
};

export default Methodology;

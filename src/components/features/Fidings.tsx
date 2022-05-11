import React from 'react';
import styled from 'styled-components';
import App from '../../assets/rectangle3.png';

const Container = styled.div`
    display: flex;
    background-color: #ebe7e1;
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
    width: 50%;
    margin-left: 5%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 438px;
    height: 438px;
    margin-left: 15%;
`;

const Right = styled.div`
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

const Fiddings = () => {
    return (
        <Container>
            <ActualDiv>
                <Left>
                    <Image src={App} />
                </Left>
                <Right>
                    <Title>Fidings</Title>
                    <Desc>
                        As of 2018, a total of 20 International NGOs, 2 international missions
                        (USAID & EU) and 47 Local NGOs also called Saving Groups practitioners were
                        surveyed. The subsequent results showed that as of December 2018 a total of
                        47,369 saving groups were present in Rwanda. Among those saving groups, we
                        had 2 categories of SGs: 25,409 Supervised Groups (SGs that are still being
                        monitored on a regular basis) and 21,960 Graduated Groups (SGs that are
                        independently carrying out their activities).
                        <br />
                        <br />
                        The total SGs membership was evaluated at 1,169,732 members with an average
                        of 25.3 members per Saving Group. Females only make 76.1% of the total SGs
                        members while Males make 23.9%. The female predominance is caused by the
                        fact that many projects through which most SGs were formed targeted females
                        financial inclusion.
                        <br />
                        <br />
                        Most International NGOs that were surveyed use the SAVIX platform which only
                        records the savings as of December in the current year (in this case 2018)
                        and outstanding loans as of December of the current year (December 2018).
                        All other practitioners that couldn’t provide data in compliance with the
                        set criteria were omitted and were consequently marked as N/A. As a result,
                        HOPE International & Winrock International SGs do not have any information
                        regarding either Savings or Outstanding Loans.
                        <br />
                        <br />
                        Surveyed SGs were able to record Rw31 billion ( ~ $34 million) in savings
                        and Rw24 billion (~ $26 million) in outstanding loans as of December 2018.
                    </Desc>
                </Right>
            </ActualDiv>
        </Container>
    );
};

export default Fiddings;

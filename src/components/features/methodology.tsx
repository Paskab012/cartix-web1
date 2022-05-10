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

const Methodology = () => {
    return (
        <Container>
            <ActualDiv>
                <Left>
                    <Title>Methodology</Title>
                    <Desc>
                        Savings groups are social groups formed by different NGOs also called
                        promoters to help people within the same community especially low-income
                        people to come out of poverty.These people are mobilized into groups of
                        20–30 people that save an agreed amount of money – known as the share amount
                        – on weekly basis.A member can save up to five times the share amount.
                        <br />
                        <br />
                        From these resources the group will lend members up to three times the
                        amount they have saved, which they pay back over a short period of time
                        (typically three months) with interest. FinScope 2012 and 2016 studies
                        revealed that 30% of the Rwandan population uses informal mechanism to
                        access financial services hence bringing to light the important role saving
                        groups are playing NOT ONLY in the lives of the poor people but also in the
                        entire financial market spectrum. Saving groups are believed to build the
                        financial literacy and financial capability of its members.
                        <br />
                        <br />
                        AFR in collaboration with MINECOFIN and Saving Groups (SGs) promoters worked
                        together on the development of a Savings groups map to display or
                        demonstrate the status of the savings groups and understand the contribution
                        of SGs towards financial inclusion (volume of savings mobilized and loans
                        disbursed).This is an exercise that will be rolled out on a yearly basis and
                        will support in providing additional insights on needed interventions to
                        better serve members of these groups.
                    </Desc>
                </Left>
                <Right>
                    <Image src={App} />
                </Right>
            </ActualDiv>
        </Container>
    );
};

export default Methodology;

import React from 'react';
import styled from 'styled-components';
import App from '../../assets/groupMap.png';
import AnimatedBack from '../animations/AnimatedBack';

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin: 10rem;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Title = styled.span`
    font-size: 40px;
    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const Desc = styled.p`
    font-size: 15px;
    color: black;
    margin-top: 30px;
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>Context</Title>
                <Desc>
                    Savings groups are social groups formed by different NGOs also called promoters
                    to help people within the same community especially low-income people to come
                    out of poverty.These people are mobilized into groups of 20–30 people that save
                    an agreed amount of money – known as the share amount – on weekly basis.A member
                    can save up to five times the share amount.
                    <br />
                    From these resources the group will lend members up to three times the amount
                    they have saved, which they pay back over a short period of time (typically
                    three months) with interest. FinScope 2012 and 2016 studies revealed that 30% of
                    the Rwandan population uses informal mechanism to access financial services
                    hence bringing to light the important role saving groups are playing NOT ONLY in
                    the lives of the poor people but also in the entire financial market spectrum.
                    Saving groups are believed to build the financial literacy and financial
                    capability of its members.
                    <br />
                    AFR in collaboration with MINECOFIN and Saving Groups (SGs) promoters worked
                    together on the development of a Savings groups map to display or demonstrate
                    the status of the savings groups and understand the contribution of SGs towards
                    financial inclusion (volume of savings mobilized and loans disbursed).This is an
                    exercise that will be rolled out on a yearly basis and will support in providing
                    additional insights on needed interventions to better serve members of these
                    groups.
                </Desc>
                <Desc>We care your business and guarantee you to achieve marketing goals.</Desc>
            </Right>
            <AnimatedBack />
        </Container>
    );
};

export default Feature;

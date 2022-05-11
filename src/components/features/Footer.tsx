import React from 'react';
import styled from 'styled-components';
import App from '../../assets/group.png';
import { Rectangles } from './Rectangles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const ActualDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 958px;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Image = styled.img`
    width: 1200px;
    height: 198px;
    object-fit: cover;
`;

const Boxes = styled.div`
    width: 100%;
    @media only screen and (max-width: 480px) {
        width: ;
    }
`;

const Title = styled.span`
    font-size: 34px;
    font-weight: 600;
    color: #753918;
    margin-bottom: 1rem;
    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const Desc = styled.p`
    font-size: 15px;
    color: black;
    width: 100%;
    margin: 2rem;
    line-height: 23px;
    text-align: center;
    line-height: 21.94px;
`;

const Button = styled.button`
    font-size: 15px;
    background-color: #ebe7e1;
    border-radius: 5px;
    width: 322px;
    height: 52px;
    font-weight: 600;
    margin-botton: 4rem;
`;

const Btn = styled.span`
    margin-right: 20px;
    background-color: #753918;
    padding: 0.6rem;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    margin-left: -25px;
`;

const Footer = () => {
    return (
        <Container>
            <ActualDiv>
                <Title>Practitioners</Title>
                <Button>
                    <Btn>International NGOs </Btn> Local NGOs
                </Button>
                <Desc>
                    Also called saving groups promoters, practitioners are NGOs (Both international
                    and local) working in the sector of financial inclusion through saving groups.
                    They facilitate the creation of SGs and closely monitor them through financial
                    literacy trainings, technical assistance, etc.
                </Desc>
            </ActualDiv>
            <Boxes>
               <Rectangles /> 
            </Boxes>
            

        </Container>
    );
};

export default Footer;

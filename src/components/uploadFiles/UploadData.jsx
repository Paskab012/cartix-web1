import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import goBack from '../../assets/goback.svg';
import DataNav from '../data/DataNavbar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: #f2f2f2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
`;

const Header = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    margin: 7%;
    background-color: red;
`;

const Item = styled.li`
    color: black;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    margin-right: 3%;
    background-color: green;
    width: 10%;
    height: 10%;
    align-items: center;
    justify-content: center;
`;

const SavingsButton = styled.button`
    background-color: #3981ed;
    color: white;
    font-size: 12px;
    font-weight: normal;
    padding: 12px 20px;
    border-radius: 5px;
`;

const StyledLink = styled(Link)`
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    &:hover {
        transition: 0.2s all ease-in-out;
        color: black;
    }
`;

const GoBack = styled.img`
    width: 30%;
    height: 30%;
    mix-blend-mode: luminosity;
    opacity: 0.9;
`;

const XlsxUpload = () => {
    return (
        <>
            <DataNav />
            <Container>
                <Header>
                    <Item>
                        <GoBack src={goBack} />
                        <StyledLink className="animate__animated" to="/savings-group-map/data">
                            Go back
                        </StyledLink>
                    </Item>
                </Header>
            </Container>
            ;
        </>
    );
};

export default XlsxUpload;

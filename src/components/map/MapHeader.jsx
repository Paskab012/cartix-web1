import React from 'react';
import styled from 'styled-components';
import picture from '../../assets/bnr.svg';
import profile from '../../assets/Profile.png';
import { Link } from 'react-router-dom';
import CountryDropDown from './CountryDropDown';

const Container = styled.div`
    height: 85px;
    box-shadow: 0px 4px 4px 0px #00000008;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-left: -70px;
`;

const Small = styled.span`
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.015em;
    text-align: left;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const MenuItem = styled.li`
    margin-right: 29px;
    font-size: 15px;
    color: black;
    font-weight: 400;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 2px 3px;
    color: black;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    margin-right: 24px;
`;

const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

const Profile = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-bottom: 4px;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 15px;
    transition: 0.2s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    &:hover {
        transition: 0.2s all ease-in-out;
        color: #753918;
        font-weight: 600;
    }
`;

const MapNavbar = () => {
    return (
        <Container>
            <Left>
                <Picture src={picture} />
                <Logo>
                    BNR <Small>CSGs Data</Small>
                </Logo>
                <Menu>
                    <MenuItem>
                        <StyledLink className="animate__animated" to="/">
                            Home
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink className="animate__animated" to="/savings-group-map">
                            Map
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink className="animate__animated" to="/savings-group-map/data">
                            Data
                        </StyledLink>
                    </MenuItem>
                </Menu>
            </Left>
            <Wrapper>
                <Button>
                    <CountryDropDown />
                </Button>
                <Profile src={profile} />
                <Button>Mugisha Roger</Button>
            </Wrapper>
        </Container>
    );
};

export default MapNavbar;

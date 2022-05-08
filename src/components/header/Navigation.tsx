import React from 'react';
import styled from 'styled-components';
import picture from '../../assets/bnr.svg';
import profile from '../../assets/Profile.png';

const Container = styled.div`
    height: 85px;
    box-shadow: 0px 4px 4px 0px #00000008;
    display: flex;
    justify-content: space-between;
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
    li {
        &:hover {
            font-weight: 600;
        }
    }
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

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Picture src={picture} />
                <Logo>
                    BNR <Small>CSGs Data</Small>
                </Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Map</MenuItem>
                    <MenuItem>Downloads</MenuItem>
                    <MenuItem>BNR</MenuItem>
                </Menu>
            </Left>
            <Wrapper>
                <Profile src={profile} />
                <Button>Sign In</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

import React from 'react';
import styled from 'styled-components';
import picture from '../../assets/bnr.svg';
import profile from '../../assets/Profile.png';
import { Link } from 'react-router-dom';
// import CountryDropDown from './CountryDropDown';

const Container = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* background-color: white; */
    box-shadow: 0px 4px 4px 0px #00000008;
    overflow: hidden;
    background-color: white;
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

const InputFieldSelect = styled.select`
    width: 60%;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3%;
    border: 1.2px solid #dee1e7;
    border-radius: 4px;
    text-align: center;
    margin-left: -38%;

    ::placeholder {
        color: black;
        font-size: 12px;
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
    padding: 2%;
    color: black;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
    margin-right: 3%;
    border: none;
    width: 60%;
    align-items: center;
    background-color: white;
`;

const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

const Profile = styled.img`
    width: 1.2rem;
    height: 1.3rem;
    object-fit: cover;
    cursor: pointer;
    position: absolute;
    margin-left: 4%;
`;

const InputOption = styled.option`
    background-color: red;
    color: white;
    border: solid 1px red;
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
                <InputFieldSelect
                    classname="js-example-basic-single"
                    id="0"
                    name="country"
                    type="text"
                    placeholder="Year :"
                    className="inputs"
                >
                    <InputOption value="2022">Year :2022</InputOption>
                    <InputOption value="2021">Year :2021</InputOption>
                    <InputOption value="2020">Year :2020</InputOption>
                    <InputOption value="2019">Year :2019</InputOption>
                    <InputOption value="2018">Year :2018</InputOption>
                    <InputOption value="2017">Year :2017</InputOption>
                </InputFieldSelect>
                <Profile src={profile} />
                <Button>Mugisha Roger</Button>
            </Wrapper>
        </Container>
    );
};

export default MapNavbar;

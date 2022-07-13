import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 85px;
    box-shadow: 0px 4px 4px 0px #00000008;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    background-color: white;
    z-index: 999;
`;
export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    z-index: 1;
    cursor: pointer;
`;

export const LeftWrapper = styled.div`
    padding: 0.4rem 0.5rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
    &:hover {
        transition: 0.2s all ease-in-out;
        border: 1px solid black;
        font-weight: 600;
    }
`;

export const RightWrapper = styled.div`
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: center;
    &:hover {
        transition: 0.2s all ease-in-out;
        border: 1px solid black;
        font-weight: 600;
    }
`;

export const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
`;

export const Logo = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-left: -70px;
`;

export const Small = styled.span`
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.015em;
    text-align: left;
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    margin-right: 29px;
    font-size: 15px;
    color: black;
    font-weight: 400;
    cursor: pointer;
`;

export const Button = styled.button`
    padding: 2px 3px;
    color: black;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    margin-right: 24px;
    background-color: white;
    border: none;
`;

export const LogoutButton = styled.button`
    background-color: #753918;
    padding: 8% 18% 8% 18%;
    color: white;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    margin-right: 24px;
    border-radius: 5px;
`;

export const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

export const Profile = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-bottom: 4px;
    cursor: pointer;
    margin-left: 1rem;
`;

export const AddUser = styled.img`
    width: 20px;
    height: 18px;
    object-fit: cover;
    margin-bottom: 4px;
    cursor: pointer;
    margin-left: 1rem;
`;

export const StyledLink = styled(Link)`
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

export const BnrStyledLink = styled.a`
    text-decoration: none;
`;

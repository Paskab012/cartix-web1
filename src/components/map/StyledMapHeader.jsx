import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000008;
    overflow: hidden;
    /* position: fixed; */
    z-index: 999;
`;
export const Wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    align-items: center;
    width: 20%;
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

export const InputFieldSelect = styled.select`
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

export const MenuItem = styled.li`
    margin-right: 29px;
    font-size: 15px;
    color: black;
    font-weight: 400;
    cursor: pointer;
`;

export const Button = styled.button`
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

export const UserButton = styled.button`
    padding: 2px 3px;
    color: black;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    margin-right: 24px;
    background-color: white;
    border: none;
`;

export const Picture = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`;

export const Profile = styled.img`
    /* width: 1.2rem;
    height: 1.3rem;
    object-fit: cover;
    cursor: pointer;
    position: absolute;
    margin-left: 4%; */
`;

export const InputOption = styled.option`
    background-color: red;
    color: white;
    border: solid 1px red;
`;

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 15px;
    transition: 0.2s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
    &:hover {
        transition: 0.2s all ease-in-out;
        color: #753918;
        font-weight: 600;
    }
`;
export const LeftWrapper = styled.div`
    padding: 0.3rem 0.5rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    &:hover {
        transition: 0.2s all ease-in-out;
        border: 1px solid black;
        font-weight: 600;
    }
`;
export const AddUser = styled.img`
    width: 18px;
    height: 18px;
    object-fit: cover;
    margin-bottom: 4px;
    cursor: pointer;
    padding: 1px;
`;
export const RightWrapper = styled.div`
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
    justify-content: center;
    &:hover {
        transition: 0.2s all ease-in-out;
        border: 1px solid black;
        font-weight: 600;
    }
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

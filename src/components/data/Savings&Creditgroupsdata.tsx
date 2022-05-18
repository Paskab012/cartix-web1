import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: white;
    width: 80%;
    height: 40%;
`;

const Header = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const Item = styled.li`
    color: black;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
`;

const SavingsButton = styled.button`
    background-color: #3981ed;
    color: white;
    font-size: 12px;
    line-height: 15px;
    font-weight: normal;
`;

const StyledLink = styled(Link)`
    color: rgba(0, 0, 0, 0.5);
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
        color: black;
        font-weight: 600;
        margin-bottom: 4px solid #dba628;
    }
`;

const SavingsCreditgroupsdata = () => {
    return (
        <>
            <Container>
                <Header>
                    <Item>
                        <StyledLink className="animate__animated" to="/SavingData">
                            Saving&Credit groups data
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink className="animate__animated" to="/Consentform">
                            Consent form
                        </StyledLink>
                    </Item>
                    <SavingsButton>Upload data</SavingsButton>
                </Header>
            </Container>
            ;
        </>
    );
};

export default SavingsCreditgroupsdata;

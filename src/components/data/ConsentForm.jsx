import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 80%;
    height: 65px;
    margin-top: 4%;
    display: flex;
    align-items: center;
    align-content: center;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 2%;
`;

const Item = styled.li`
    color: black;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    margin-right: 4%;
`;

const SavingsButton = styled.button`
    background-color: #3981ed;
    color: white;
    font-size: 12px;
    font-weight: normal;
    transition: 0.2s all ease-in-out;
    padding: 12px 20px;
    border-radius: 5px;

    &:hover {
        border: 1px solid white;
        transition: 0.2s all ease-in-out;
        background-color: #dba628;
        font-weight: bold;
        color: black;
    }
`;

const StyledLink = styled(Link)`
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-size: 15px;
    transition: 0.3s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    &:hover {
        transition: 0.2s all ease-in-out;
        color: black;
        font-weight: 700;
        border-bottom: 3px solid #dba628;
        padding: 22px;
    }
`;

const Btn = styled.div`
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

const Hdr = styled.div`
    width: 70%;
    display: flex;
`;

const ConsentForm = () => {
    return (
        <>
            <Container>
                <Header>
                    <Hdr>
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
                    </Hdr>

                    <Btn>
                        <SavingsButton>Upload consent form</SavingsButton>
                    </Btn>
                </Header>
            </Container>
            ;
        </>
    );
};

export default ConsentForm;

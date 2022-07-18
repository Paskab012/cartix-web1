import React from 'react';
import { connect } from 'react-redux';

import picture from '../../assets/bnr.svg';
import profile from '../../assets/Profile.png';
import addUser from '../../assets/AddUser.png';
import { logout } from '../../redux/actions/auth';
import {
    Wrapper,
    LeftWrapper,
    AddUser,
    StyledLink,
    Button,
    RightWrapper,
    Profile,
    LogoutButton,
    Container,
    Left,
    Picture,
    Small,
    Logo,
    Menu,
    MenuItem,
    BnrStyledLink,
} from './navigationStyled';
import App from './Accordion';

const Navbar = ({ logout, isAuthenticated }) => {
    const loginGuest = () => (
        <>
            <Wrapper>
                <LeftWrapper>
                    <AddUser src={addUser} />
                    <StyledLink className="animate__animated" to="/signup">
                        <Button>Sign Up</Button>
                    </StyledLink>
                </LeftWrapper>

                <RightWrapper>
                    <Profile src={profile} />
                    <StyledLink className="animate__animated" to="/login">
                        <Button>Sign In</Button>
                    </StyledLink>
                </RightWrapper>
            </Wrapper>
        </>
    );

    const authUser = () => (
        <Wrapper>
            <StyledLink className="animate__animated" to="/">
                <LogoutButton onClick={logout}>Logout</LogoutButton>
            </StyledLink>
        </Wrapper>
    );

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
                    <MenuItem>Downloads</MenuItem>
                    <MenuItem>
                        <BnrStyledLink>
                            <a
                                href="https://bnr.rw/home/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                BNR
                            </a>
                        </BnrStyledLink>
                    </MenuItem>
                </Menu>
            </Left>
            {isAuthenticated ? authUser() : loginGuest()}
            {/* <App/> */}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);

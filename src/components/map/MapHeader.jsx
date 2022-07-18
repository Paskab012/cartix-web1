import React from 'react';
import picture from '../../assets/bnr.svg';
import profile from '../../assets/Profile.png';
import { logout } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import addUser from '../../assets/AddUser.png';

// import CountryDropDown from './CountryDropDown';
import {
    Container,
    Left,
    Picture,
    Logo,
    Small,
    Menu,
    MenuItem,
    StyledLink,
    Wrapper,
    InputFieldSelect,
    InputOption,
    Profile,
    Button,
    LogoutButton,
    UserButton,
    LeftWrapper,
    AddUser,
    RightWrapper,
} from './StyledMapHeader';

const MapNavbar = ({ logout, isAuthenticated }) => {
    const mapLoginGuest = () => (
        <>
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
                    
                    </Menu>
                </Left>
                <Wrapper>
                <LeftWrapper>
                    <AddUser src={addUser} />
                    <StyledLink className="animate__animated" to="/signup">
                        <UserButton>Sign Up</UserButton>
                    </StyledLink>
                </LeftWrapper>
                <RightWrapper>
                <Profile src={profile} />
                    <StyledLink className="animate__animated" to="/login">
                        <UserButton>Sign In</UserButton>
                    </StyledLink>
                </RightWrapper>
            </Wrapper>
            </Container>
    
        </>
    );

    const mapAuthUser = () => (
        <>
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

            {/* <Wrapper>
                <StyledLink className="animate__animated" to="/">
                    <LogoutButton onClick={logout}>Logout</LogoutButton>
                </StyledLink>
            </Wrapper> */}
        </>
    );
    return (
        <Container>
            {isAuthenticated ? mapAuthUser() : mapLoginGuest()}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(MapNavbar);

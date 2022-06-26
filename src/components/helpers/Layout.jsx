import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../redux/actions/auth';

const Container = styled.div`
    width: 100%;
`;
function Layout(props) {
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);

    return (
        <>
            {/* <DataNavbar /> */}
            <Container>{props.children}</Container>;
        </>
    );
}

export default connect(null, { checkAuthenticated, load_user })(Layout);

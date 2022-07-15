import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({accessToken, ...props}) => {
    return <>{accessToken ? <Route {...props} /> : <Navigate to="/login" />}</>;
};

const mapStateToProps = (state) => ({
    accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps, {})(PrivateRoute);

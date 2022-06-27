import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = (props: any) => {
    const token = localStorage.getItem('auth');
    return <>{token ? <Route {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;

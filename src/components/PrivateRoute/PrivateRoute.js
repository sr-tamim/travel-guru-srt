import React from 'react';
import { Redirect, Route } from 'react-router';
import useUserContext from '../../Firebase/useUserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useUserContext();
    return (
        <Route {...rest} render={({ location }) => user ? children :
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
        } />
    );
};

export default PrivateRoute;
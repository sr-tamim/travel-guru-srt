import React from 'react';
import { Redirect, Route } from 'react-router';
import useUserContext from '../../Firebase/useUserContext';
import ProgressIndicator from '../Shared/ProgressIndicator/ProgressIndicator';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, userLoading } = useUserContext();
    return (
        userLoading ? <ProgressIndicator /> :
            <Route {...rest} render={({ location }) => user ? children :
                <Redirect to={{ pathname: '/login', state: { from: location } }} />
            } />
    );
};

export default PrivateRoute;
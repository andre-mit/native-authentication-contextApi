import React, { useContext } from 'react';

import AuthContext, { AuthProvider } from '../contexts/auth';


import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { signed, user } = useContext(AuthContext);
    console.log(user);
    return signed ? (
        <AppRoutes />
    ) : (
            <AuthRoutes />
        )
}

export default Routes;
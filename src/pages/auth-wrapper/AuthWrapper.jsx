import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Wrapper from './AuthWrapper.styles';

function AuthWrapper({ children }) {
    const { isLoading, error } = useAuth0();

    if (isLoading) {
        return (
            <Wrapper>
                <h1>Loading...</h1>
            </Wrapper>
        );
    }

    if (error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        );
    }

    return <>{children}</>;
}

export default AuthWrapper;

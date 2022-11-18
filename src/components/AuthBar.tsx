import { useEffect } from 'react';

import { AuthService  } from "../machines/authMachine";

export const AuthBar = () => {
    const { ready, dispose, signOut } = AuthService();

    useEffect(() => {
        ready(); // lift this up - you'd want one auth service shared across a platform

        return () => dispose();
    });


    return (
        <div>
            <button onClick={signOut}>sign out</button>
        </div>
    )
}
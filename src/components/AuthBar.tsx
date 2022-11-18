import { useEffect } from 'react';

import { AuthService  } from "../machines/authMachine";

export const AuthBar = () => {
    const { ready, dispose, signOut } = AuthService();

    useEffect(() => {
        ready(); // start service

        return dispose(); // stop service onunmount ? still not sure about this
    });


    return (
        <div>
            <button onClick={signOut}>sign out</button>
        </div>
    )
}
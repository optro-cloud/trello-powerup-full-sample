import React, {useEffect, useState} from 'react';
import {useProvidedTrello} from '@optro/ui-react';
import {getAuth, setAuth} from '../api/power-up';
import '../styles/card.css';

function ShowAuthorization() {
    const t = useProvidedTrello();
    const [authStatus, setAuthStatus] = useState<boolean | null>(null);

    const refresh = async () => {
        const result: boolean = await getAuth(t);
        setAuthStatus(result);
    }

    const changeAuth = async () => {
        await setAuth(t, !authStatus);
        await refresh();
    }

    useEffect(() => {
        refresh();
    }, []);

    return (
        <div>
            {authStatus === null && (
                <p>Loading...</p>
            )}
            {authStatus !== null && (
                <div>
                    <p>Authorize the Notes Power-Up</p>
                    <p>
                        <span>Current Status: </span>
                        <span style={{color: authStatus ? 'green' : 'red'}}>
                            {authStatus
                                ? '✅ Authorized'
                                : '❌ Unauthorized'
                            }
                        </span>
                    </p>
                    <button className={authStatus ? 'mod-danger' : 'mod-primary'} onClick={changeAuth}>
                        {authStatus ? 'Unauthorize' : 'Authorize'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ShowAuthorization;

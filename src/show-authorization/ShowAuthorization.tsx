import {hot} from "react-hot-loader/root";
import * as React from "react";
import {useEffect, useState} from "react";
import {getAuth, getBoardNotes, removeNote, setAuth} from "../api/power-up";
import {NoteWithCard} from "../types/power-up";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";
import emptyAnimation from "../styles/lottie-empty.json";
import "../styles/card.css";

const t = window.TrelloPowerUp.iframe();

function BoardButton() {
    const [authStatus, setAuthStatus] = useState(null);

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
                        <span style={{color: authStatus ? "green" : "red"}}>
                            {authStatus
                                ? "✅ Authorized"
                                : "❌ Unauthorized"
                            }
                        </span>
                    </p>
                    <button className={authStatus ? "mod-danger" : "mod-primary"} onClick={changeAuth}>
                        {authStatus ? "Unauthorize" : "Authorize"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default hot(BoardButton);

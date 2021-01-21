import {hot} from "react-hot-loader/root";
import * as React from "react";
import "./styles.css";
import {TrelloApi} from "../api/trello";

// @ts-ignore
const trelloApi = new TrelloApi(TrelloPowerUp.iframe());

function ShowSettings() {
    return (
        <div>
            <p>Settings Here</p>
        </div>
    );
}

export default hot(ShowSettings);

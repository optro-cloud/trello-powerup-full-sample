import {hot} from "react-hot-loader/root";
import * as React from "react";
import "./styles.css";
import {TrelloApi} from "../api/trello";

// @ts-ignore
const trelloApi = new TrelloApi(TrelloPowerUp.iframe());

function BoardButton() {
    return (
        <div>
            <p>Summary Here</p>
        </div>
    );
}

export default hot(BoardButton);

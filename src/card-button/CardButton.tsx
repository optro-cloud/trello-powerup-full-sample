import {hot} from "react-hot-loader/root";
import * as React from "react";
import {CirclePicker} from "react-color";
import {useEffect, useState} from "react";
import {TrelloApi} from "../api/trello";
import "./styles.css";

// @ts-ignore
const trelloApi = new TrelloApi(TrelloPowerUp.iframe());

function CardButton() {
    const [color, setColor] = useState("#0079bf");
    const [note, setNote] = useState("");
    const [cardName, setCardName] = useState("Card");

    useEffect(() => {
        trelloApi.t.card("name").then((res: any) => setCardName(res.name));
    }, []);

    return (
        <div id="container">
            <p>Add a new note to <b>{cardName}</b>.</p>
            <label htmlFor="color">Color</label>
            <div className="color-picker-container">
                <CirclePicker
                    color={color}
                    onChange={(col: any) => setColor(col.hex)}
                    colors={["#0079bf", "#70b500", "#ff9f1a", "#eb5a46", "#f2d600", "#c377e0"]}
                />
            </div>
            <label htmlFor="note">Note</label>
            <textarea
                className="note-field"
                value={note}
                id="note"
                name="note"
                onChange={(event) => setNote(event.target.value)}
            />
            <button
                disabled={note.length === 0}
                title={note.length === 0 ? "Enter a note first" : "Create Note"}
                className="mod-primary"
                onClick={() => {
                    trelloApi.addNoteToCard(color, note).then(() => {
                        trelloApi.closePopup();
                    })
                }}
            >
                Create
            </button>
        </div>
    );
}

export default hot(CardButton);

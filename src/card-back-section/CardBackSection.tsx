import {hot} from "react-hot-loader/root";
import * as React from "react";
import "./styles.css";
import {useEffect, useState} from "react";
import {TrelloApi} from "../api/trello";
import {Note} from "../types/notes";
import ReactMarkdown from "react-markdown";

// @ts-ignore
const trelloApi = new TrelloApi(TrelloPowerUp.iframe());

function CardBackSection() {
    const [items, setItems] = useState(null);

    async function getNotes() {
        setItems(await trelloApi.getNotesForCurrentCard());
    }

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div>
            <div className="card-container">
                {items === null && (
                    <p>Loading...</p>
                )}
                {items !== null && items.length > 0 && items.map((item: Note, index: number) => (
                    <div key={index} className="card" style={{borderLeft: `6px solid ${item.color}`}}>
                        <div className={"card-markdown"}>
                            <ReactMarkdown>{item.text}</ReactMarkdown>
                        </div>
                        <div className="card-delete-button-container">
                            <button
                                style={{margin: "0"}}
                                onClick={() => {
                                    trelloApi.removeNoteFromCard(index).then(getNotes);
                                }}
                            >Remove</button>
                        </div>
                    </div>
                ))}
                {items !== null && items.length === 0 && (
                    <p>No Items</p>
                )}
            </div>
        </div>
    );
}

export default hot(CardBackSection);

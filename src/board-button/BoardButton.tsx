import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {getBoardNotes, removeNote} from '../api/power-up';
import {NoteWithCard} from '../types/power-up';
import ReactMarkdown from 'react-markdown';
import Lottie from 'lottie-react';
import emptyAnimation from '../styles/lottie-empty.json';
import '../styles/card.css';

const t = window.TrelloPowerUp.iframe();

function BoardButton() {
    const [items, setItems] = useState<NoteWithCard[] | null>(null);

    const refresh = async () => {
        const notes: NoteWithCard[] = await getBoardNotes(t);
        setItems(notes);
    }

    useEffect(() => {
        // Load the Notes List when the Component is rendered
        refresh().then(() => {
            // Refresh the Notes List when Trello signals that a change has happened
            t.render(async () => { await refresh(); });
        });
    }, []);

    return (
        <div>
            <div className="card-container">
                {items === null && (
                    <p>{'Loading...'}</p>
                )}
                {items !== null && items.length > 0 && items.map((item: NoteWithCard, index: number) => (
                    <div key={index} className="card" style={{borderLeft: `10px solid ${item.color}`}}>
                        <div className={'card-markdown'}>
                            <ReactMarkdown>{item.text}</ReactMarkdown>
                            <div>
                                <a href="#" onClick={() => { return t.showCard(item.card.id); }}>{item.card.name}</a>
                            </div>
                        </div>
                        <div className="card-delete-button-container">
                            <button onClick={() => removeNote(t, index, item.card.id)}>Remove</button>
                        </div>
                    </div>
                ))}
                {items !== null && items.length === 0 && (
                    <div>
                        <Lottie
                            className="lottie-empty-state"
                            loop={false}
                            animationData={emptyAnimation}
                        />
                        <div className="lottie-empty-state-label">
                            <h2>No Notes</h2>
                            <a href="https://lottiefiles.com/14171-empty" rel="noreferrer" target="_blank">Animation by Andrei Deniz</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default hot(BoardButton);

import React, {useEffect, useState} from 'react';
import {useProvidedTrello} from '@optro/ui-react';
import {Note} from '../types/power-up';
import ReactMarkdown from 'react-markdown';
import Lottie from 'lottie-react';
import emptyAnimation from '../styles/lottie-empty.json';
import {getCardNotes, removeNote} from '../api/power-up';
import '../styles/card.css';
import '../styles/lottie.css';

function CardBackSection() {
    const t = useProvidedTrello();
    const [items, setItems] = useState<Note[] | null>(null);

    const refresh = async () => {
        let notes: Note[] = await getCardNotes(t);
        setItems(notes)
        if(notes.length === 0) {
            await t.sizeTo(300);
        } else {
            await t.sizeTo('#react-root');
        }
    }

    useEffect(() => {
        // Load the Notes List when the Component is rendered
        refresh();
        // Refresh the Notes List when Trello signals that a change has happened
        t.render(async () => { return refresh(); });
    }, []);

    return (
        <div>
            <div className="card-container">
                {items === null && (
                    <p>Loading...</p>
                )}
                {items !== null && items.length > 0 && items.map((item: Note, index: number) => (
                    <div key={index} className="card" style={{borderLeft: `10px solid ${item.color}`}}>
                        <div className={'card-markdown'}>
                            <ReactMarkdown>{item.text}</ReactMarkdown>
                        </div>
                        <div className="card-delete-button-container">
                            <button onClick={() => removeNote(t, index)}>Remove</button>
                        </div>
                    </div>
                ))}
                {items !== null && items.length === 0 && (
                    <div>
                        <Lottie
                            className="lottie-empty-state"
                            loop={false}
                            height={200}
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

export default CardBackSection;

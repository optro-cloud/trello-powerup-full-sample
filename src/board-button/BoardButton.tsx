import React, {useEffect, useState} from 'react';
import {useProvidedTrello} from '@optro/ui-react';
import {getBoardNotes} from '../api/power-up';
import {NoteWithCard} from '../types/power-up';
import ReactMarkdown from 'react-markdown';
import Lottie from 'lottie-react';
import emptyAnimation from '../styles/lottie-empty.json';
import '../styles/card.css';
import '../styles/lottie.css';

function BoardButton() {
    const t = useProvidedTrello();
    const [items, setItems] = useState<NoteWithCard[] | null>(null);

    const refresh = async () => {
        const notes: NoteWithCard[] = await getBoardNotes(t);
        setItems(notes);
        if(notes.length === 0) {
            await t.sizeTo(300);
        } else {
            await t.sizeTo('#react-root');
        }
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

export default BoardButton;

import React, {useState} from 'react';
import {useProvidedTrello} from '@optro/ui-react';
import {CirclePicker} from 'react-color';
import {createNote} from '../api/power-up';
import './styles.css';

function CardButton() {
    const t = useProvidedTrello();
    const [color, setColor] = useState('#0079bf');
    const [note, setNote] = useState('');

    return (
        <div id="container">
            <p>Add a new note to the card.</p>
            <label htmlFor="color">Color</label>
            {
                // Colour picker for the note colour
            }
            <div className="color-picker-container">
                <CirclePicker
                    color={color}
                    onChange={(col: any) => setColor(col.hex)}
                    colors={['#0079bf', '#70b500', '#ff9f1a', '#eb5a46', '#f2d600', '#c377e0']}
                />
            </div>
            <label htmlFor="note">Note (Markdown)</label>
            <textarea
                className="note-field"
                value={note}
                id="note"
                name="note"
                onChange={(event) => setNote(event.target.value)}
            />
            <p>
                <a href="https://www.markdownguide.org/getting-started/" rel="noreferrer" target="_blank">
                    View Markdown Documentation
                </a>
            </p>
            <button
                disabled={note.length === 0}
                title={note.length === 0 ? 'Enter a note first' : 'Create Note'}
                className="mod-primary"
                onClick={() => { return createNote(t, {color: color, text: note}, true); }}
            >
                Create
            </button>
        </div>
    );
}

export default CardButton;

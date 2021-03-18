import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {removeAllNotes} from '../api/power-up';
import './styles.css';

const t = window.TrelloPowerUp.iframe();

function ShowSettings() {
    return (
        <div style={{padding: '4px'}}>
            <p>Configure the Notes Power-Up.</p>
            <button onClick={() => removeAllNotes(t, 'shared')} className="mod-danger">
                Delete All Public Notes
            </button>
            <hr/>
            <p>Any additional settings should go here.</p>
        </div>
    );
}

export default hot(ShowSettings);

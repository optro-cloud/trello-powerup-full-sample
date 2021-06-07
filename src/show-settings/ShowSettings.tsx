import React from 'react';
import {removeAllNotes} from '../api/power-up';
import {useProvidedTrello} from '@optro/ui-react';
import './styles.css';

function ShowSettings() {
    const t = useProvidedTrello();
    return (
        <div className="inner-settings-panel">
            <p>Configure the Notes Power-Up.</p>
            <button onClick={() => removeAllNotes(t, 'shared')} className="mod-danger">
                Delete All Public Notes
            </button>
            <hr/>
            <p>Any additional settings should go here.</p>
        </div>
    );
}

export default ShowSettings;

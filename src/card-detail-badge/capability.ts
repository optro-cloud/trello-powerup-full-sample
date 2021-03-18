import {Trello} from '../types/trello';
import {CapabilityProps, Note} from '../types/power-up';
import {getCardNotes} from '../api/power-up';

async function getDetailBadge(t: Trello.PowerUp.IFrame): Promise<Trello.PowerUp.CardBadge> {
    const notes: Note[] = await getCardNotes(t);
    if(notes.length === 0) {
        throw t.NotHandled();
    } else {
        return {
            text: `${notes.length} ${notes.length === 1 ? 'Note' : 'Notes'}`,
            color: 'green',
            refresh: 10, // in seconds
        };
    }
}

export function getCardDetailBadge(t: Trello.PowerUp.IFrame, _props: CapabilityProps): Trello.PowerUp.CardDetailBadgeDynamic[] {
    return [{
        dynamic: () => {
            return getDetailBadge(t);
        },
    }];
}

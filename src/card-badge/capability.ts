import {Trello} from '../types/trello';
import {CapabilityProps, Note} from '../types/power-up';
import {getCardNotes} from '../api/power-up';

async function getBadge(t: Trello.PowerUp.IFrame, icon: string): Promise<Trello.PowerUp.CardBadge> {
    const notes: Note[] = await getCardNotes(t);
    if(notes.length === 0) {
        throw t.NotHandled();
    } else {
        return {
            text: `${notes.length} ${notes.length === 1 ? 'Note' : 'Notes'}`,
            icon: icon,
            color: 'green',
            refresh: 10, // in seconds
        };
    }
}

export function getCardBadge(t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardBadgeDynamic[] {
    return [{
        dynamic: () => {
            return getBadge(t, props.baseUrl + props.icon.light);
        },
    }];
}

import {Trello} from '../types/trello';
import {Note, NoteWithCard} from '../types/power-up';

export async function createNote(t: Trello.PowerUp.IFrame, note: Note, closePopup?: boolean, cardId?: string): Promise<void> {
    const notes: Note[] = await getCardNotes(t);
    notes.push(note);
    await t.set(cardId || 'card', 'shared', 'notes', JSON.stringify(notes));
    if(closePopup) {
        await t.closePopup();
    }
}

export async function getCardNotes(t: Trello.PowerUp.IFrame, cardId?: string): Promise<Note[]> {
    return JSON.parse(await t.get(cardId || 'card', 'shared', 'notes', '[]'));
}

export async function getBoardNotes(t: Trello.PowerUp.IFrame): Promise<NoteWithCard[]> {
    const cards: Trello.PowerUp.Card[] = await t.cards('all');
    const allNotes: NoteWithCard[] = [];
    for(const card of cards) {
        const cardNotes: Note[] = await getCardNotes(t, card.id);
        allNotes.push(...cardNotes.map((note: Note) => ({...note, card: card})));
    }
    return allNotes;
}

export async function removeNote(t: Trello.PowerUp.IFrame, index: number, cardId?: string): Promise<void> {
    const notes: Note[] = await getCardNotes(t);
    notes.splice(index, 1);
    return t.set(cardId || 'card', 'shared', 'notes', JSON.stringify(notes));
}

export async function removeAllNotes(t: Trello.PowerUp.IFrame, scope: 'shared' | 'private'): Promise<void> {
    const cards: Trello.PowerUp.Card[] = await t.cards('all');
    for (const card of cards) {
        await t.set(card.id, scope, 'notes', '[]');
    }
    await t.alert({
        message: 'Deleted Notes!',
        display: 'info',
        duration: 5
    });
}

export async function getAuth(t: Trello.PowerUp.IFrame): Promise<boolean> {
    const status: string = await t.get('board', 'private', 'notes-auth', 'false');
    return status === 'true';
}

export async function setAuth(t: Trello.PowerUp.IFrame, value: boolean) {
    await t.set('board', 'private', 'notes-auth', value ? 'true' : 'false');
}

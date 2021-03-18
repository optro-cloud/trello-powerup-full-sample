import {Trello} from './trello';

export interface Note {
    color: string;
    text: string;
}

export interface NoteWithCard extends Note {
    card: Trello.PowerUp.Card;
}

export interface CardWithNotes extends Trello.PowerUp.Card {
    notes?: Note[];
}

export interface CapabilityProps {
    baseUrl: string;
    icon: {
        light: string;
        dark: string;
    }
}

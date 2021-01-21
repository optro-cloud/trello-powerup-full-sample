import {Note} from "../types/notes";
import {Trello} from "../types/trello";

export class TrelloApi {
    public t: Trello.PowerUp.IFrame;

    constructor(t: Trello.PowerUp.IFrame) {
        this.t = t;
    }

    getCardDetails(): PromiseLike<Trello.PowerUp.Card> {
        return this.t.card("id", "name");
    }

    resizeToRoot(): PromiseLike<void> {
        return this.t.sizeTo("#react-root");
    }

    async getNotesForCurrentCard(): Promise<Note[]> {
        const notes = await this.t.get("card", "shared", "notes", "[]");
        return JSON.parse(notes);
    }

    setNotesForCurrentCard(notes: Note[]): PromiseLike<void> {
        return this.t.set("card", "shared", "notes", JSON.stringify(notes));
    }

    async addNoteToCard(color: string, text: string): Promise<void> {
        let notes: Note[] = await this.getNotesForCurrentCard();
        notes.push({color: color, text: text});
        return this.setNotesForCurrentCard(notes);
    }

    async removeNoteFromCard(index: number): Promise<void> {
        let notes: Note[] = await this.getNotesForCurrentCard();
        notes.splice(index, 1);
        return this.setNotesForCurrentCard(notes);
    }

    openAddNotePopup(): PromiseLike<void> {
        return this.t.popup({
            title: "Add a Note",
            url: "card-button.html",
            height: 275
        })
    }

    closePopup(): PromiseLike<void> {
        return this.t.closePopup();
    }
}

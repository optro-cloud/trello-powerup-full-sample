import {Trello} from "../types/trello";
import {Note} from "../types/notes";

export default function getCurrentTime(): string {
    const now = new Date();
    const hours = `${now.getHours() < 10 ? "0" : ""}${now.getHours()}`;
    const mins = `${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`;
    return `${hours}:${mins}`;
}

export async function sortList(t: Trello.PowerUp.IFrame, opts: any, order: "asc" | "desc"): Promise<any> {
    const map: any = {};
    for (const card of opts.cards) {
        const notes: Note[] = JSON.parse(await t.get(card.id, "shared", "notes", "[]"));
        map[card.id] = notes.length;
    }
    const sortedCards = opts.cards.sort(
        (a: any, b: any) => map[a.id] < map[b.id] ? 1 : (map[a.id] > map[b.id]) ? -1 : 0
    ).map((c: any) => c.id);

    return {
        sortedIds: order === "desc" ? sortedCards : sortedCards.reverse()
    };
}

export async function getBadge(t: Trello.PowerUp.IFrame, icon: string): Promise<any> {
    const notes = JSON.parse(await t.get("card", "shared", "notes", "[]"));
    const notesNo = notes.length;
    return notesNo === 0 ? undefined : {
        text: `${notesNo} ${notesNo === 1 ? "Note" : "Notes"}`,
        icon: icon,
        color: "green",
        refresh: 10, // in seconds
    };
}

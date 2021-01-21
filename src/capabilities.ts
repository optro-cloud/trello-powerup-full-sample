import {getBadge, sortList} from "./api/utilities";
import {Trello} from "./types/trello";

const ICON_DARK: string = "https://static.thenounproject.com/png/256635-200.png";
const WHITE_ICON = "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg";
const BLACK_ICON = "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg";

// @ts-ignore
TrelloPowerUp.initialize({
    "board-buttons": (_t: Trello.PowerUp.IFrame) => {
        return [{
            icon: {dark: WHITE_ICON, light: BLACK_ICON},
            text: "Notes",
            callback: (t: Trello.PowerUp.IFrame) => {
                return t.modal({
                    title: "Notes",
                    url: t.signUrl("./board-button.html"),
                    fullscreen: false
                });
            },
            condition: "edit"
        }];
    },
    "card-buttons": (_t: Trello.PowerUp.IFrame, _opts: any) => {
        return [{
            icon: ICON_DARK,
            text: "Add a Note",
            callback: (t: Trello.PowerUp.IFrame) => t.popup({
                title: "Add a Note",
                url: t.signUrl("./card-button.html"),
                height: 275
            })
        }];
    },
    "card-back-section": async (t: Trello.PowerUp.IFrame) => {
        return {
            title: "Notes",
            icon: ICON_DARK,
            content: {
                type: "iframe",
                url: t.signUrl("./card-back-section.html"),
                height: 250
            }
        };
    },
    "card-badges": async (t: Trello.PowerUp.IFrame) => {
        return [{
            dynamic: async () => getBadge(t, WHITE_ICON),
        }];
    },
    "card-detail-badges": (t: Trello.PowerUp.IFrame) => {
        return [{
            dynamic: async () => getBadge(t, WHITE_ICON),
        }];
    },
    "list-sorters": (_t: Trello.PowerUp.IFrame) => {
        return [
            {text: "Notes (Ascending)", callback: async (t: any, opts: any) => sortList(t, opts, "asc")},
            {text: "Notes (Descending)", callback: async (t: any, opts: any) => sortList(t, opts, "desc")}
        ];
    },
    "show-settings": (t: Trello.PowerUp.IFrame) => {
        return t.popup({
            title: "Note Settings",
            url: t.signUrl("./settings.html"),
            height: 200
        })
    },
    "on-enable": (_t: Trello.PowerUp.IFrame) => {
        console.log("Power-Up installed! Welcome aboard!");
    },
    "on-disable": (_t: Trello.PowerUp.IFrame) => {
        console.log("Power-Up has been disabled. Cleaning up...");
    }
});

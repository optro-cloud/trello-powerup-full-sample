import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export function getShowSettings(t: Trello.PowerUp.IFrame, _props: CapabilityProps): any {
    return t.popup({
        title: 'Note Settings',
        url: './show-settings.html',
        height: 150
    });
}

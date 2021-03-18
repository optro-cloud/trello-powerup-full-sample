import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export function getShowAuthorization(t: Trello.PowerUp.IFrame, _props: CapabilityProps) {
    return t.popup({
        title: 'Power-Up Authorization',
        url: './show-authorization.html',
        height: 140,
    });
}

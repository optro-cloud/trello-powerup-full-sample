import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export function getCardBackSection(t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardBackSection {
    return {
        title: 'Notes',
        icon: props.baseUrl + props.icon.dark,
        content: {
            type: 'iframe',
            url: t.signUrl('./card-back-section.html'),
            height: 50
        }
    };
}

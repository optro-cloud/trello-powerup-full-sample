import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getFormatUrl(_t: Trello.PowerUp.IFrame, options: Trello.PowerUp.FormatUrlOptions, props: CapabilityProps): Trello.PowerUp.FormatUrlResponse {
    return {
        icon: props.baseUrl + props.icon.dark,
        text: `👉 ${options.url} 👈`,
        subtext: 'Some Subtext Could Go Here!',
        image: {
            url: props.baseUrl + '/static/favicon.png',
            size: 'contain'
        },
        actions: [{
            text: 'Download',
            callback: (_tc: Trello.PowerUp.IFrame) => {
                console.log('Action clicked');
            },
        }]
    };
}

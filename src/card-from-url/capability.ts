import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export async function getCardFromUrl(_t: Trello.PowerUp.IFrame, options: Trello.PowerUp.CardFromUrlOptions, _props: CapabilityProps): Promise<Trello.PowerUp.CardFromUrlResponse> {
    return {
        name: `🚀 ${options.url} 😀`,
        desc: 'This URL was inserted as a Card using a Custom Power-Up'
    }
}

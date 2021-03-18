import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getSaveAttachment(_t: Trello.PowerUp.IFrame, _options: any, _props: CapabilityProps) {
    return {
        callback: function (_t: Trello.PowerUp.IFrame, opts: any) {
            console.log('Save Attachment', opts);
        }
    }
}

import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export function getOnDisable(_t: Trello.PowerUp.IFrame, _props: CapabilityProps): void {
    console.log('Power-Up has been disabled. Cleaning up...');
}

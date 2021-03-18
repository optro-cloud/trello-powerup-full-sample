import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export async function getOnEnable(t: Trello.PowerUp.IFrame, _props: CapabilityProps): Promise<void> {
    await t.alert({
        message: 'Power-Up installed! Welcome aboard!',
        display: 'info',
        duration: 5
    });
}

import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';
import {removeAllNotes} from '../api/power-up';

export async function getRemoveData(t: Trello.PowerUp.IFrame, _props: CapabilityProps) {
    await removeAllNotes(t, 'private');
}

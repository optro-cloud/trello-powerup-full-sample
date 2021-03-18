import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getListAction(_t: Trello.PowerUp.IFrame, _props: CapabilityProps): Trello.PowerUp.ListAction[] {
    return [{
        text: 'Delete All Notes',
        callback: async (tc: Trello.PowerUp.IFrame) => {
            const listInfo: Trello.PowerUp.List = await tc.list('cards');
            for(const card of listInfo.cards) {
                await tc.remove(card.id, 'shared', 'notes');
            }
            await tc.alert({
                display: 'success',
                duration: 5,
                message: 'Deleted Notes'
            });
            return tc.closePopup();
        }
    }];
}

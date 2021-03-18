import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';
import {getAuth} from '../api/power-up';

export async function getAuthorizationStatus(t: Trello.PowerUp.IFrame, _options: any, _props: CapabilityProps): Promise<Trello.PowerUp.AuthorizationStatusResponse> {
    return {
        authorized: await getAuth(t)
    }
}

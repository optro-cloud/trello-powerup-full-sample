import {Trello} from './types/trello';
import {CapabilityProps} from './types/power-up';
import {getBoardButton} from './board-button/capability';
import {getCardButton} from './card-button/capability';
import {getCardBackSection} from './card-back-section/capability';
import {getCardBadge} from './card-badge/capability';
import {getCardDetailBadge} from './card-detail-badge/capability';
import {getListSorter} from './list-sorter/capability';
import {getListAction} from './list-action/capability';
import {getShowSettings} from './show-settings/capability';
import {getOnDisable} from './on-disable/capability';
import {getOnEnable} from './on-enable/capability';
import {getAttachmentSection} from './attachment-sections/capability';
import {getAttachmentThumbnail} from './attachment-thumbnail/capability';
import {getAuthorizationStatus} from './authorization-status/capability';
import {getCardFromUrl} from './card-from-url/capability';
import {getFormatUrl} from './format-url/capability';
import {getRemoveData} from './remove-data/capability';
import {getShowAuthorization} from './show-authorization/capability';
import {getSaveAttachment} from './save-attachment/capability';

const CAPABILITY_PROPS: CapabilityProps = {
    baseUrl: window.location.href.replace(/\/$/, ''),
    icon: {
        dark: '/static/icon-dark.png',
        light: '/static/icon-light.png'
    }
}

window.TrelloPowerUp.initialize({
    'attachment-sections': (t: Trello.PowerUp.IFrame, options: {entries: Trello.PowerUp.Attachment[]}) => getAttachmentSection(t, options, CAPABILITY_PROPS),
    'attachment-thumbnail': (t: Trello.PowerUp.IFrame, options: Trello.PowerUp.AttachmentThumbnailOptions) => getAttachmentThumbnail(t, options, CAPABILITY_PROPS),
    'authorization-status': (t: Trello.PowerUp.IFrame, options: any) => getAuthorizationStatus(t, options, CAPABILITY_PROPS),
    'board-buttons': (t: Trello.PowerUp.IFrame) => getBoardButton(t, CAPABILITY_PROPS),
    'card-buttons': (t: Trello.PowerUp.IFrame) => getCardButton(t, CAPABILITY_PROPS),
    'card-back-section': (t: Trello.PowerUp.IFrame) => getCardBackSection(t, CAPABILITY_PROPS),
    'card-badges': (t: Trello.PowerUp.IFrame) => getCardBadge(t, CAPABILITY_PROPS),
    'card-detail-badges': (t: Trello.PowerUp.IFrame) => getCardDetailBadge(t, CAPABILITY_PROPS),
    'card-from-url': (t: Trello.PowerUp.IFrame, options: Trello.PowerUp.CardFromUrlOptions) => getCardFromUrl(t, options, CAPABILITY_PROPS),
    'format-url': (t: Trello.PowerUp.IFrame, options: Trello.PowerUp.FormatUrlOptions) => getFormatUrl(t, options, CAPABILITY_PROPS),
    'list-sorters': (t: Trello.PowerUp.IFrame) => getListSorter(t, CAPABILITY_PROPS),
    'list-actions': (t: Trello.PowerUp.IFrame) => getListAction(t, CAPABILITY_PROPS),
    'remove-data': (t: Trello.PowerUp.IFrame) => getRemoveData(t, CAPABILITY_PROPS),
    'save-attachment': (t: Trello.PowerUp.IFrame, options: any) => getSaveAttachment(t, options, CAPABILITY_PROPS),
    'show-authorization': (t: Trello.PowerUp.IFrame) => getShowAuthorization(t, CAPABILITY_PROPS),
    'show-settings': (t: Trello.PowerUp.IFrame) => getShowSettings(t, CAPABILITY_PROPS),
    'on-enable': (t: Trello.PowerUp.IFrame) => getOnEnable(t, CAPABILITY_PROPS),
    'on-disable': (t: Trello.PowerUp.IFrame) => getOnDisable(t, CAPABILITY_PROPS)
});

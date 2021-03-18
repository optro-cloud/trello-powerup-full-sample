import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getAttachmentSection(t: Trello.PowerUp.IFrame, options: {entries: Trello.PowerUp.Attachment[]}, props: CapabilityProps): Trello.PowerUp.AttachmentSection[] {
    const claimed = options.entries.filter(function (attachment: Trello.PowerUp.Attachment) {
        return attachment.url.indexOf('https://www.optro.cloud') === 0;
    });
    if (claimed && claimed.length > 0) {
        return [{
            claimed: claimed,
            icon: props.baseUrl + props.icon.dark,
            title: 'Example Attachment Section',
            content: {
                type: 'iframe',
                url: t.signUrl('./attachment-section.html', {
                    arg: 'Argument Here'
                }),
                height: 230
            }
        }];
    } else {
        throw t.NotHandled();
    }
}

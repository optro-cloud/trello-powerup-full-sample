import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator';

function formatUrl(_t: Trello.PowerUp.IFrame, url: string) {
    if (!/^https?:\/\/www\.appfox\.io\/[a-z]{4}\//.test(url)) {
        return null;
    }
    const match: RegExpExecArray | null = /^https?:\/\/www\.appfox\.io\/([a-z]{4})\//.exec(url);
    if(match && match.length > 0) {
        return uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals]
        });
    } else {
        return null;
    }
}

export function getAttachmentThumbnail(t: Trello.PowerUp.IFrame, options: Trello.PowerUp.AttachmentThumbnailOptions, _props: CapabilityProps) {
    const parkName = formatUrl(t, options.url);
    if (parkName){
        // return an object with some or all of these properties:
        // title, image, modified (Date), created (Date), createdBy, modifiedBy
        return {
            title: parkName,
            image: {
                url: './static/favicon.png',
                logo: true // false if you are using a thumbnail of the content
            }
        };
    } else {
        throw t.NotHandled();
    }
}

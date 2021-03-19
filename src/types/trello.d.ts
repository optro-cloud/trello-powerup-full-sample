/**
 * Thanks to Angelo Tata for the Trello Types -
 * See https://github.com/tatablack/leaner-coffee-powerup for more info.
 * Available under the Apache-2.0 License
 */
declare global {
    interface Window {
        TrelloPowerUp: Trello.PowerUp;
        locale: string;
    }
}

export namespace Trello {
    namespace Callback {
        type CacheAction = 'run' | 'retain' | 'release';
        type SerializeResult = (value: any, key?: string) => any

        type SerializeOutput = {
            _callback: string;
        }

        interface CacheOptions {
            action: CacheAction;
            options: any;
            callback: string;
        }

        interface Cache {
            callback(t: PowerUp.IFrame, options: CacheOptions, serializeResult: SerializeResult): PromiseLike<any>;
            serialize(fx: (t: PowerUp.IFrame, args: any) => any): SerializeOutput;
            reset(): void;
        }
    }

    export interface PowerUp {
        version: string;
        Promise: PromiseLike<any>;
        CallbackCache: Callback.Cache;
        PostMessageIO: any; // PostMessageIO
        iframe(options?: PowerUp.IFrameOptions): PowerUp.IFrame;
        initialize(handlers: PowerUp.CapabilityHandlers, options?: PowerUp.PluginOptions): PowerUp.Plugin | PowerUp.IFrame;
        restApiError(): any;
        util: PowerUp.Util;
    }

    namespace PowerUp {
        // INTERNAL TYPES
        type ResourceDictionary = {
            [key: string]: string;
        }

        type OrganizationFields = keyof Organization;
        type BoardFields = keyof Board;
        type CardFields = keyof Card;
        type ListFields = keyof List;
        type MemberFields = keyof Member;

        // USER-FACING TYPES

        type CapabilityHandlers = {
            'attachment-sections'?: (t: PowerUp.IFrame, options: { entries: Attachment[]; }) => PromiseLike<(AttachmentSection | LazyAttachmentSection)[]> | AttachmentSection[];
            'attachment-thumbnail'?: (t: PowerUp.IFrame, options: AttachmentThumbnailOptions) => PromiseLike<AttachmentThumbnail> | AttachmentThumbnail;
            'board-buttons'?: (t: PowerUp.IFrame) => PromiseLike<(BoardButtonUrl | BoardButtonCallback)[]> | BoardButtonCallback[];
            'card-back-section'?: (t: PowerUp.IFrame) => PromiseLike<CardBackSection> | CardBackSection;
            'card-badges'?: (t: PowerUp.IFrame) => PromiseLike<(CardBadgeDynamic | CardBadge)[]> | CardBadgeDynamic[];
            'card-buttons'?: (t: PowerUp.IFrame) => PromiseLike<CardButton[]> | CardButton[];
            'card-detail-badges'?: (t: PowerUp.IFrame) => PromiseLike<(CardDetailBadgeDynamic | CardDetailBadge)[]> | CardDetailBadgeDynamic[];
            'card-from-url'?: (t: Trello.PowerUp.IFrame, options: CardFromUrlOptions) => PromiseLike<CardFromUrlResponse> | CardFromUrlResponse;
            'format-url'?: (t: Trello.PowerUp.IFrame, options: FormatUrlOptions) => void;
            'list-actions'?: (t: PowerUp.IFrame) => PromiseLike<ListAction[]> | ListAction[];
            'list-sorters'?: (t: PowerUp.IFrame) => PromiseLike<ListSorter[]> | ListSorter[];
            'on-enable'?: (t: PowerUp.IFrame) => PromiseLike<void>;
            'on-disable'?: (t: Trello.PowerUp.IFrame) => void;
            'remove-data'?: (t: Trello.PowerUp.IFrame) => void;
            'save-attachment'?:  (t: Trello.PowerUp.IFrame, options: any) => void;
            'show-settings'?: (t: PowerUp.IFrame) => PromiseLike<void>;
            'authorization-status'?: (t: PowerUp.IFrame, options: any) => PromiseLike<AuthorizationStatusResponse>;
            'show-authorization'?: (t: Trello.PowerUp.IFrame) => void;
        };

        type Condition = 'admin' | 'always' | 'edit' | 'readonly' | 'signedIn' | 'signedOut';

        type Model = 'board' | 'card' | 'organization';
        type Scope = Model | 'member';
        type Permissions = 'read' | 'write';

        type Visibility = 'shared' | 'private';

        interface CardFromUrlOptions {
            url: string;
        }

        interface FormatUrlOptions {
            url: string;
        }

        interface FormatUrlResponse {
            icon: string;
            text: string;
            subtext: string;
            image: {
                url: string;
                size: 'contain' | 'original' | 'cover';
            }
            actions: FormatUrlActions[];
            thumbnail?: string; // Deprecated
        }

        interface FormatUrlActions {
            text: string;
            callback: (t: Trello.PowerUp.IFrame) => void;
        }

        interface CardFromUrlResponse {
            name: string;
            desc: string;
        }

        interface PopupOptionsItem {
            text: string;
            callback?(t: any, options: any): PromiseLike<void>;
        }

        interface AuthorizationStatusResponse {
            authorized: boolean;
        }

        interface AttachmentThumbnail {
            title: string;
            image: {
                url: string;
                logo: boolean;
            }
        }

        interface AttachmentThumbnailOptions {
            url: string;
        }

        interface PopupOptions {
            title: string;
            items: PopupOptionsItem[];
            mouseEvent?: MouseEvent;
        }

        interface PopupSearchOptions extends PopupOptions {
            search: {
                count?: number;
                placeholder?: string;
                empty?: string;
                searching?: string;
                debounce?: number;
            };
        }

        interface PopupIframeOptions {
            callback?(t: PowerUp.IFrame, options: { locale: string }): void;
            title: string;
            url: string;
            args?: {
                [key: string]: any;
            };
            height?: number;
            mouseEvent?: MouseEvent;
        }

        interface PopupDateOptions {
            type: 'date' | 'datetime';
            title: string;
            callback(t: PowerUp.IFrame, options: {
                date: string;
            }): PromiseLike<void>;
            date?: Date;
            minDate?: Date;
            maxDate?: Date;
            mouseEvent: MouseEvent;
        }

        interface PopupConfirmOptions {
            type: 'confirm';
            title: string;
            message: string;
            confirmText: string;
            onConfirm(t: PowerUp.IFrame, opts: any): PromiseLike<void>;
            confirmStyle?: 'primary' | 'danger';
            mouseEvent: MouseEvent;
        }

        interface PopupConfirmWithCancelOptions extends PopupConfirmOptions {
            cancelText: string;
            onCancel(t: PowerUp.IFrame, opts: any): PromiseLike<void>;
        }

        interface HeaderAction {
            icon: string;
            alt: string;
            callback(): void;
            position: 'left' | 'right';
            url?: string;
        }

        type Colors = 'blue' | 'green' | 'orange' | 'red' | 'yellow' |
            'purple' | 'pink' | 'sky' | 'lime' | 'light-gray' | 'business-blue';

        type AlertDisplay = 'info' | 'warning' | 'error' | 'success';

        // INTERNAL INTERFACES
        interface Localizer {
            resourceDictionary: ResourceDictionary;
            localize(key: string, args: readonly string[]): string;
        }

        interface Localization {
            defaultLocale: string;
            supportedLocales: string[];
            resourceUrl: string;
        }

        interface LocalizerOptions {
            localizer?: Localizer;
            loadLocalizer?(): PromiseLike<Localizer>;
            localization?: Localization;
        }

        interface Util {
            color: {
                getHexString(): string;
                namedColorStringToHex(): string;
            };

            convert: {
                bytesToHexString(): string;
                hexStringToUint8Array(): any;
            };

            crypto: {
                decryptSecret(): any;
                encryptSecret(): any;
                exportAESCBCKeyToRaw(): any;
                generateAESCBCKey(): any;
                generateInitVector(): any;
                importAESCBCKeyFromRaw(): any;
                sha256Digest(): any;
            };

            initLocalizer(locale: string, options: LocalizerOptions): PromiseLike<void>;
            makeErrorEnum(): Error;
            relativeUrl(url: string): string;
        }

        interface AnonymousHostHandlers {
            requestWithContext(command: string, options: any): PromiseLike<any>;
            getAll(): PromiseLike<any>;
            get(scope: Scope | string, visibility: Visibility, key?: string, defaultValue?: any): PromiseLike<any>;
            set(scope: Scope | string, visibility: Visibility, key: string, defaultValue?: any): PromiseLike<void>;
            set(scope: Scope | string, visibility: Visibility, entries: {
                [ key: string]: any;
            }): PromiseLike<void>;
            remove(scope: Scope | string, visibility: Visibility, key: string): PromiseLike<void>;
            remove(scope: Scope | string, visibility: Visibility, entries: string[]): PromiseLike<void>;
            safe(html: string): string;
            localizeKey(key: string, data?: {
                [key: string]: string;
            }): string;
            localizeKeys(keys: [string | string[]]): string[];
            localizeNode(node: Element): void;
            board(...fields: ['all'] | BoardFields[]): PromiseLike<Board>;
            cards(...fields: ['all'] | CardFields[]): PromiseLike<Card[]>;
            lists(...fields: ['all'] | ListFields[]): PromiseLike<List[]>;
            member(...fields: ['all'] | MemberFields[]): PromiseLike<Member>;
            organization(...fields: ['all'] | OrganizationFields[]): PromiseLike<Organization>;
        }

        interface HostHandlers extends AnonymousHostHandlers {
            getContext(): Context;
            isMemberSignedIn(): boolean;
            memberCanWriteToModel(modelType: Model): boolean;
            arg(name: string, defaultValue?: any): any;
            signUrl(url: string, args?: { [key: string]: any}): string;
            navigate(options: { url: string }): any;
            showCard(idCard: string): PromiseLike<void>;
            hideCard(): PromiseLike<void>;
            alert(options: {
                message: string;
                duration?: number;
                display?: AlertDisplay;
            }): PromiseLike<void>;
            hideAlert(): PromiseLike<void>;
            popup(
                options: PopupOptions | PopupSearchOptions |
                    PopupIframeOptions | PopupDateOptions |
                    PopupConfirmOptions | PopupConfirmWithCancelOptions): PromiseLike<void>;
            overlay(options: {
                url: string;
                args: { [key: string]: any};
                inset: unknown;
            }): PromiseLike<void>;
            boardBar(options: {
                url: string;
                args?: { [key: string]: any};
                height?: number;
                accentColor?: string | Colors;
                callback?(t: PowerUp.IFrame): void;
                title?: string;
                actions?: HeaderAction[];
                resizable?: boolean;
            }): PromiseLike<void>;
            modal(options: {
                url: string;
                accentColor?: string | Colors;
                height?: number;
                fullscreen?: boolean;
                callback?(): void;
                title?: string;
                actions?: HeaderAction[];
                args?: { [key: string]: any};
            }): PromiseLike<void>;
            updateModal(options: {
                accentColor?: string | Colors;
                actions?: HeaderAction[];
                fullscreen?: boolean;
                title?: string;
            }): PromiseLike<void>;
            closePopup(): PromiseLike<void>;
            back(): PromiseLike<void>;
            hideOverlay(): PromiseLike<void>;
            closeOverlay(options?: {
                inset?: unknown;
            }): PromiseLike<void>;
            hideBoardBar(): PromiseLike<void>;
            closeBoardBar(): PromiseLike<void>;
            closeModal(): PromiseLike<void>;
            sizeTo(arg: string | number | Element): PromiseLike<void>;
            card(...fields: ['all'] | CardFields[]): PromiseLike<Card>;
            list(...fields: ['all'] | ListFields[]): PromiseLike<List>;
            attach(data: {
                name: string;
                url: string;
            }): PromiseLike<void>;
            requestToken(options: unknown): PromiseLike<string>;
            authorize(authUrl: string, options?: {
                height?: number;
                width?: number;
                validToken?(value: string): boolean;
            }): PromiseLike<string>;
            storeSecret(secretKey: string, secretData: string): PromiseLike<void>;
            loadSecret(secretKey: string): PromiseLike<string>;
            clearSecret(secretKey: string): PromiseLike<void>;
            notifyParent(message: 'done', options?: {
                targetOrigin: string;
            }): PromiseLike<void>;
        }

        interface IFrameOptions extends LocalizerOptions {
            context?: string;
            secret?: string;
            helpfulStacks?: boolean;
        }

        interface IFrame extends HostHandlers {
            io: any | null;
            args: any[];
            secret?: string;
            options: IFrameOptions;
            i18nPromise: PromiseLike<void>;
            init(): any;
            connect(): void;
            request(command: string, options: any): PromiseLike<any>;
            render(fxRender: () => void): any;
            initApi(): void;
            getRestApi(): unknown;
            initSentry(): void;
            NotHandled: any;
        }

        interface PluginOptions extends LocalizerOptions {
            Sentry?: {
                configureScope(callback: (scope: {
                    setTags(name: string, value: string): void;
                    setUser(value: {
                        id: string;
                    }): void;
                }) => void): void;
            };
            appKey?: string;
            appName?: string;
            apiOrigin?: string;
            authOrigin?: string;
            localStorage?: Storage;
            tokenStorageKey?: string;
            helpfulStacks?: boolean;
        }

        interface Plugin extends AnonymousHostHandlers {
            options: PluginOptions;
            connect(): any; // return an instance of PostMessageIO
            request(command: string, options: any): PromiseLike<any>; //  // return PostMessageIO.request, whatever that is
            init(): any; // return an instance of PostMessageIO
            NotHandled(): any; // return PostMessageIO.NotHandled, whatever that is
        }

        // USER-FACING INTERFACES
        interface BoardButtonBase {
            icon: {
                dark: string;
                light: string;
            };
            text: string;
            condition?: Condition;
        }

        interface BoardButtonCallback extends BoardButtonBase {
            callback: (t: Trello.PowerUp.IFrame) => PromiseLike<void>;
        }

        interface BoardButtonUrl extends BoardButtonBase {
            url: string;
            target?: string;
        }

        interface CardBackSection {
            title: string;
            icon: string;
            content: {
                type: 'iframe';
                url: string;
                height?: number;
            };
        }

        interface CardBadge {
            text?: string;
            icon?: string;
            color?: Colors;
            refresh?: number;
        }

        interface CardBadgeDynamic {
            dynamic(): CardBadge | Promise<CardBadge>;
        }

        interface CardDetailBadge extends CardBadge {
            callback?(t: PowerUp.IFrame): void;
            url?: string;
            target?: string;
        }

        interface CardDetailBadgeDynamic {
            dynamic(): CardDetailBadge | Promise<CardDetailBadge>;
        }

        interface ListAction {
            text: string;
            callback(t: PowerUp.IFrame): PromiseLike<void>;
        }

        interface ListSorter {
            text: string;
            callback(t: PowerUp.IFrame, options: {
                cards: Card[];
            }): PromiseLike<{ sortedIds: string[]}>;
        }

        interface CardButton {
            icon: string;
            text: string;
            condition?: Condition;
            callback(t: Trello.PowerUp.IFrame): PromiseLike<void>;
            url?: string;
            target?: string;
        }

        interface AttachmentsByType {
            [key: string]: {
                board: number;
                card: number;
            };
        }

        interface Preview {
            bytes: number;
            height: number;
            scaled: boolean;
            url: string;
            width: number;
        }

        interface AttachmentSectionBase {
            claimed: Attachment[];
            icon: string;
            content: {
                type: string;
                url: string;
                height?: number;
            };
        }

        interface AttachmentSection extends AttachmentSectionBase {
            title: string;
        }

        interface LazyAttachmentSection extends AttachmentSectionBase {
            id: string;
            title(): string;
        }

        interface Attachment {
            date: string;
            edgeColor: string;
            id: string;
            idMember: string;
            name: string;
            previews: Preview[];
            url: string;
        }

        interface BadgesInfo {
            attachments: number;
            attachmentsByType: AttachmentsByType;
            checkItems: number;
            checkItemsChecked: number;
            comments: number;
            description: boolean;
            due: string; // timestamp
            dueComplete: boolean;
            fogbugz: string;
            location: boolean;
            subscribed: boolean;
            viewingMemberVoted: boolean;
            votes: number;
        }

        interface Coordinates {
            latitude: number;
            longitude: number;
        }

        interface Label {
            id: string;
            name: string;
            color: Colors;
        }

        interface CustomField {
            id: string;
            idCustomField: string;
            idValue?: string;
            value?: CustomFieldValue;
        }

        interface CustomFieldValue {
            checked?: string;
            date?: string;
            text?: string;
            number?: string;
        }

        type MemberType = 'admin' | 'normal' | 'observer'

        interface Membership {
            deactivated: boolean;
            id: string;
            idMember: string;
            memberType: MemberType;
            unconfirmed: boolean;
        }

        interface Organization {
            id: string;
            name: string;
        }

        interface Board {
            id: string;
            name: string;
            url: string; // https://trello.com/c/I5nAdteE/9-test
            shortLink: string;
            members: Member[];
            dateLastActivity: string; // '2019-11-28T15:53:19.709Z'
            idOrganization: string;
            customFields: CustomField[];
            labels: Label[];
            memberships: Membership[];
        }

        interface Card {
            address: string | null;
            attachments: Attachment[];
            badges: BadgesInfo;
            closed: boolean;
            coordinates: Coordinates | null;
            cover: Attachment | null;
            customFieldItems: CustomField[];
            dateLastActivity: string; // '2019-11-28T15:53:19.709Z'
            desc: string;
            due: string | null; // '2019-11-28T15:53:19.709Z'
            dueComplete: boolean;
            id: string;
            idList: string;
            idShort: number;
            labels: Label[];
            locationName: string | null;
            members: Member[];
            name: string;
            pos: number;
            shortLink: string;
            url: string; // https://trello.com/c/I5nAdteE/9-test
        }

        interface List {
            id: string;
            name: string;
            cards: Card[];
        }

        interface Member {
            id: string;
            fullName: string | null;
            username: string | null;
            initials: string | null;
            avatar: string | null;
        }

        interface Context {
            board: string;
            card?: string;
            command?: string;
            member: string;
            organization?: string;
            enterprise?: string;
            permissions?: {
                board: Permissions;
                card: Permissions;
                organization: Permissions;
            };
            version: string;
        }
    }
}

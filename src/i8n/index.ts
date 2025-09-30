import { trMessages } from './tr';
import { enMessages } from './en';

type ILanguage = 'tr-TR' | 'en-EN';

export class MLHelper {
    static readonly currentLangugage: ILanguage = 'en-EN' ;
    static readonly supportedLanguages: ILanguage[] = ['tr-TR', 'en-EN'];
}

export function getMessages(message: MessageKeys) {
    const localeMessages = messages[MLHelper.currentLangugage];

    return (localeMessages[message] || '') as (typeof enMessages)[MessageKeys];
}



export const messages = {
    "tr-TR": trMessages,
    "en-EN": enMessages
};

export type MessageKeys = keyof typeof messages["en-EN"];
export class LocalString { 
    ar : string;
    en : string;
};

export type SupportedLanguage = keyof LocalString;
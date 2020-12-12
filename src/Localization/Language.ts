import { ILocals } from "./Locals";

export interface LocalString {
    ar: string;
    en: string;
};

const RTL_LANGUAGES = ["ar"];


export type LocalStringRef = keyof ILocals;

export type SupportedLanguage = keyof LocalString;


const LANGUAGE_KEY = "__LANGUAGE";


let _language: SupportedLanguage | null = null;
export function getCurrentLanguage(): SupportedLanguage {
    if (!_language) {
        const lang = localStorage[LANGUAGE_KEY];
        _language = lang ?? "en";
    }

    return _language!;
}

export function setLanguage(language: SupportedLanguage): void {
    localStorage[LANGUAGE_KEY] = language;
    _language = null;
}

export function isRtl(): boolean {
    const lang = getCurrentLanguage();
    return RTL_LANGUAGES.includes(lang);
}
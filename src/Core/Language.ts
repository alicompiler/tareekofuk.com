export interface LocalString {
    ar: string;
    en: string;
};

export type SupportedLanguage = keyof LocalString;


const LANGUAGE_KEY = "__LANGUAGE";

export function getCurrentLanguage(): SupportedLanguage {
    const lang = localStorage[LANGUAGE_KEY];
    return lang ?? "en";
}

export function setLanguage(language: SupportedLanguage): void {
    localStorage[LANGUAGE_KEY] = language;
}
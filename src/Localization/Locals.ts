import { EnglishLocals } from './EnglishLocals';
import { ArabicLocals } from './ArabicLocals';
import { getCurrentLanguage } from "./Language";

interface ILocals {
    destinations: string;
    contact_us: string;
    services : string;
}


const lang = getCurrentLanguage();

let _locals: ILocals;

if (lang === "ar") {
    _locals = ArabicLocals;
} else {
    _locals = EnglishLocals;
}



export { _locals as Locals }
export type { ILocals }
import { EnglishLocals } from './EnglishLocals';
import { ArabicLocals } from './ArabicLocals';
import { getCurrentLanguage } from "./Language";

interface ILocals {
    images: string;
    for_booking: string;
    description: string;
    duration: string;
    price: string;
    send: string;
    message: string;
    subject: string;
    email: string;
    name: string;
    partners: string;
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
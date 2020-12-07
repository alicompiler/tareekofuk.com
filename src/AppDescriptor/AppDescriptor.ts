import { LocalString } from "../Core/Language";

export interface AppDescriptor {
    meta: AppMetadata;
    pages: Page[];
    socialMedia: SocialMedia[];
}

interface AppMetadata {
    logo: string;
    title: LocalString;
}

interface Page {
    sections: Section[];
}

interface Section {
    name: string;
    [propertyName: string]: string;
}

interface SocialMedia {
    name: string;
    logo: string;
    url: string;
}



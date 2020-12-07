import { LocalString } from "../Core/Language";

export interface AppDescriptor {
    meta: AppMetadata;
    pages: Page[];
    socialMedia: SocialMedia[];
    menu: Menu;
}

interface AppMetadata {
    logo: string;
    title: LocalString;
}

interface Page {
    name: string;
    sections: Section[];
    [propertyName: string]: any;
}

interface Section {
    name: string;
    [propertyName: string]: any;
}

interface SocialMedia {
    name: string;
    logo: string;
    url: string;
}

export interface Menu {
    options: MenuOption[];
    drawerIcon: string;
}

export interface MenuOption {
    title: LocalString;
    action: AppDescriptorAction;
}

export enum AppDescriptorActionType {
    ROUTE = "ROUTE",
    DOM_ID = "DOM_ID",
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}
export interface AppDescriptorAction {
    type: AppDescriptorActionType;
    value: any;
}
import { LocalString } from "../Core/Language";

export interface AppDescriptor {
    meta: AppMetadata;
    pages: {
        [pageName: string]: PageDescriptor;
    };
    socialMedia: SocialMedia[];
    menu: Menu;
}

interface AppMetadata {
    logo: string;
    title: LocalString;
}

export interface PageDescriptor {
    sections: {
        [sectionName: string]: SectionDescriptor;
    };
    [propertyName: string]: any;
}

export interface SectionDescriptor {
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
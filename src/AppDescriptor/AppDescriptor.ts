import { LocalString } from "../Core/Language";

export interface AppDescriptor {
    meta: AppMetadataDescriptor;
    pages: {
        [pageName: string]: PageDescriptor;
    };
    socialMedia: SocialMediaDescriptor[];
    menu: MenuDescriptor;
}

export interface AppMetadataDescriptor {
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

export interface SocialMediaDescriptor {
    name: string;
    logo: string;
    url: string;
}

export interface MenuDescriptor {
    options: MenuOption[];
    drawerIcon: string;
}

export interface MenuOption {
    title: LocalString;
    action: AppActionDescriptor;
}

export enum AppDescriptorActionType {
    ROUTE = "ROUTE",
    DOM_ID = "DOM_ID",
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}
export interface AppActionDescriptor {
    type: AppDescriptorActionType;
    value: any;
}
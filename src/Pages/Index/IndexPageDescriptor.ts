import { LocalString } from './../../Localization/Language';
import { PageDescriptor } from '../../AppDescriptor/AppDescriptor';

export interface IndexPageDescriptor extends PageDescriptor {
    sections: {
        landing: LandingPageDescriptor,
        services: {
            services: Service[];
        },
        partners: {
            partners: Partner[];
            sliderSettings: any;
        },
        contact: ContactInfo;
        destination: {
            title: LocalString;
            destinationsKeys: string[];
        }
    };
}

export interface Service {
    title: LocalString;
    icon: string;
    description: LocalString;
}


export interface LandingPageDescriptor {
    images: string[];
    interval: number;
    opacity: number;
}


export interface Partner {
    logo: string;
    title: LocalString;
    details: LocalString[];
}


export interface ContactInfo {
    emails: string[];
    phones: LocalString[];
    addresses: LocalString[];
}
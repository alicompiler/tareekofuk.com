import { LocalString } from './../../Localization/Language';
import { PageDescriptor } from '../../AppDescriptor/AppDescriptor';

export interface IndexPageDescriptor extends PageDescriptor {
    sections: {
        landing: LandingPageDescriptor,
        services: {
            services: Service[];
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
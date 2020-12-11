import { PageDescriptor } from './../../AppDescriptor/AppDescriptor';
import { LocalString } from './../../Localization/Language';

export interface DestinationPageDescriptor extends PageDescriptor {
    sections: {
        main: DescriptorPageMainSection
    };
    destinations: DestinationItem[];
}

export interface DescriptorPageMainSection {
    groups: {
        title: LocalString;
        destinations: string[];
    }[];
}

export interface DestinationItem {
    key: string;
    images?: string[];
    bookingInfo: LocalString;
    description: LocalString;
    duration: LocalString;
    price: LocalString;
    title: LocalString;
    image: string;
}




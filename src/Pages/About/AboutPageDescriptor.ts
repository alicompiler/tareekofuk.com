import { LocalString } from './../../Localization/Language';
import { PageDescriptor } from './../../AppDescriptor/AppDescriptor';

export interface AboutPageDescriptor extends PageDescriptor {
    aboutText: LocalString;
    staff: {
        mainImage: string;
        members: StaffMember[];
    }
}


export interface StaffMember {
    name: LocalString;
    jobTitle: LocalString;
    image: string;
    mobile: string;
    email: string;
}



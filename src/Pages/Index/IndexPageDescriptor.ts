import { AppDescriptorAction, PageDescriptor } from '../../AppDescriptor/AppDescriptor';
export interface IndexPageDescriptor extends PageDescriptor {
    sections: {
        landing: LandingPageDescriptor
    };
}


export interface LandingPageDescriptor {
    images: string[];
    interval: number;
    opacity: number;
    actions: AppDescriptorAction[];
}
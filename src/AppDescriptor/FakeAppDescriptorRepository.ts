import { indexPage } from './PreDefinedAppDescriptor/IndexPage';
import { socialMedia } from './PreDefinedAppDescriptor/SocialMedia';
import { metadata } from './PreDefinedAppDescriptor/Metadata';
import { menu } from './PreDefinedAppDescriptor/Menu';
import { AppDescriptor } from "./AppDescriptor";
import { AppDescriptorRepository } from "./AppDescriptorRepository";
import { destinationsPage } from "./../AppDescriptor/PreDefinedAppDescriptor/DestinationPage";

export class FakeAppDescriptorRepository implements AppDescriptorRepository {

    fetch(): Promise<AppDescriptor> {
        return new Promise((resolve) => {
            resolve(appDescriptor);
        });
    }

}

const appDescriptor: AppDescriptor = {
    pages: {
        index: indexPage,
        destinations: destinationsPage
    },
    socialMedia: socialMedia,
    meta: metadata,
    menu: menu
}
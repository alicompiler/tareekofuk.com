import { AppDescriptor } from "./AppDescriptor";
import { AppDescriptorRepository } from "./AppDescriptorRepository";

export class FakeAppDescriptorRepository implements AppDescriptorRepository {

    fetch(): Promise<AppDescriptor> {
        return new Promise((resolve) => {
            resolve(appDescriptor);
        });
    }

}

const appDescriptor: AppDescriptor = {
    pages: [
        {
            name: "index",
            sections: []
        }
    ],
    socialMedia: [
        { name: 'Facebook', logo: '/res/social-icons/facebook-light.png', url: '' },
        { name: 'LinkedIn', logo: '/res/social-icons/linkedin-light.png', url: '' },
        { name: 'Instagram', logo: '/res/social-icons/instagram-light.png', url: '' },
        { name: 'Twitter', logo: '/res/social-icons/twitter-light.png', url: '' },
        { name: 'Youtube', logo: '/res/social-icons/youtube-light.png', url: '' },
    ],
    meta: {
        logo: '',
        title: {
            ar: 'طريق الافق',
            en: 'Tareek Alofuk'
        }
    },
    menu: {
        options: [],
        drawerIcon: ''
    }
}
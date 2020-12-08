import { AppDescriptorActionType } from '../AppDescriptor';
import { IndexPageDescriptor } from './../../Pages/Index/IndexPageDescriptor';
export const indexPage: IndexPageDescriptor = {
    sections: {
        landing: {
            images: [
                '/res/bg/africa.jpg',
                '/res/bg/baghdad.jpg',
                '/res/bg/tunis.jpg',
                '/res/bg/egypt.jpg',
                '/res/bg/dubai.jpg'
            ],
            interval: 5000,
            opacity: 0.7
        }
    }
}
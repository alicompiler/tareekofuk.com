import { IndexPageDescriptor } from './../../Pages/Index/IndexPageDescriptor';
export const indexPage: IndexPageDescriptor = {
    sections: {
        landing: {
            images: [
                '/res/bg/world.jpg',
                '/res/bg/africa.jpg',
                '/res/bg/baghdad.jpg',
                '/res/bg/tunis.jpg',
                '/res/bg/egypt.jpg',
                '/res/bg/dubai.jpg'
            ],
            interval: 15000,
            opacity: 0.7
        },
        services: {
            services: [
                {
                    icon: '/res/icons/airplane.png',
                    title: {
                        ar: 'حجز طيران',
                        en: 'Flight Booking'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'We provide many offers from international and national Airlines agencies with more than 15 national airlines and more than 100 low cost airline and many other airline companies.'
                    }
                },
                {
                    icon: '/res/icons/hotel.png',
                    title: {
                        ar: 'حجز فنادق',
                        en: 'Hotel Booking'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'We are here to offer the best hotel deals all over the world and the best prices and different categories and classifications.\n'
                    }
                },
                {
                    icon: '/res/icons/passport.png',
                    title: {
                        ar: 'الفيزا',
                        en: 'VISA'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'We are pleased to provide all the facilities necessary for our customers to obtain the visa required to travel in a timely manner for a large number of countries in the world of various types: electronic or paper.\n'
                    }
                },
                {
                    icon: '/res/icons/stadium.png',
                    title: {
                        ar: 'حجز الملاعب و الفعاليات',
                        en: 'Sport & Events Booking'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'Now its easier than ever you can get your tickets for the international sport and art events all around the world like : World Cup, Spanish league , champions league and many other events.\n'
                    }
                },
                {
                    icon: '/res/icons/cruise.png',
                    title: {
                        ar: 'رحلات بحرية',
                        en: 'Cruise Booking'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'The Orient Queen II is a five star hotel ship and its berth is the Lebanese port of Beirut, the pearl of the Mediterranean. It acts as an aqua resort for people of all ages sharing different traditions and rules.\n'
                    }
                },
                {
                    icon: '/res/icons/world-icon.png',
                    title: {
                        ar: 'مجموعات سياحية',
                        en: 'Tours'
                    },
                    description: {
                        ar: 'لا يوجد وصف',
                        en: 'Enjoy traveling to the most amazing destinations on the glob with customized trips to ensure comfort in your dream holiday. Hotels, Visa, tickets and Tours throughout the year\'s highlighted tourism and sport\'s events.\n'
                    }
                },
            ]
        }
    }

}
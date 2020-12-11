import { LocalString } from './../../Localization/Language';
import { DestinationItem, DestinationPageDescriptor } from './../../Pages/Destinations/DestinationPageDescriptor';
export const destinationsPage: DestinationPageDescriptor = {
    sections: {
        main: {
            groups: [
                {
                    title: { ar: 'وجهات جديدة', en: 'New Destinations' },
                    destinations: ["roma", "amsterdam", "tehran"]
                },
                {
                    title: { ar: 'وجهات مميزة', en: 'Amazing Destinations' },
                    destinations: ["dubai", "istanbul", "tehran"]
                }
            ]
        }
    },


    destinations: [
        createDestination("roma", { ar: 'روما', en: 'Roma' }),
        createDestination("amsterdam", { ar: 'روما', en: 'Amsterdam' }),
        createDestination("dubai", { ar: 'روما', en: 'Dubai' }),
        createDestination("tehran", { ar: 'روما', en: 'Tehran' }),
        createDestination("istanbul", { ar: 'روما', en: 'Istanbul' }),
    ]


}



function createDestination(key: string, title: LocalString, image?: string, description?: LocalString, duration?: LocalString, bookingInfo?: LocalString, price?: LocalString, images?: string[]): DestinationItem {
    const _images = images ?? [
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg'
    ];
    const _image = image ?? "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg";
    const _bookingInfo = bookingInfo ?? { ar: "اتصل بنا على الرقم التالي : 000000000000", en: "Call us at this number : 07800000001" };
    const _duration = duration ?? { ar: 'سبعة ايام و ستة ليالي', en: '8 Nights 7 Days' };
    const _description = description ?? {
        ar: 'رحلة مميزة الى روما ، رحلة مميزة الى روما ، رحلة مميزة الى روما ، رحلة مميزة الى روما ، رحلة مميزة الى روما ، رحلة مميزة الى روما',
        en: 'Amazing tour to roma, Amazing tour to roma, Amazing tour to roma, Amazing tour to roma'
    };
    const _price = price ?? { ar: 'يبدا من 300', en: 'Starting from 300$' };

    return {
        key: key,
        image: _image,
        bookingInfo: _bookingInfo,
        images: _images,
        title: title,
        duration: _duration,
        description: _description,
        price: _price
    }
}
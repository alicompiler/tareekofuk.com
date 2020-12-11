import { DestinationItem } from "../../Pages/Destinations/DestinationPageDescriptor";
import * as React from "react";
import { DestinationInfoItem } from "./DestinationInfoItem";
import { Locals } from "../../Localization/Locals";
import { getCurrentLanguage } from "../../Localization/Language";
import { DestinationImages } from "./DestinationImages";

interface Props {
    destination?: DestinationItem;
    onClose: () => void;
}

export class DestinationModal extends React.Component<Props> {

    render(): any {
        const { destination, onClose } = this.props;
        const lang = getCurrentLanguage();

        if (!destination) {
            return null;
        }

        return <div style={{ zIndex: 100000 }}
            className={'w-full h-screen fixed top-0 left-0 bg-gray-900 bg-opacity-75 items-center justify-center flex '}>

            <a onClick={() => onClose()} className={'cursor-pointer absolute'} style={{ top: 60, zIndex: 100002 }}>
                <img alt={'close'} className={'rounded-full w-8 h-8 md:w-12 md:h-12 bg-gray-900 p-2'}
                    src={'/res/icons/close_light.png'} />
            </a>

            <div style={{ zIndex: 100001, top: 40, bottom: 40 }}
                className={'w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 absolute shadow bg-white rounded m-2 h-11/12 md:w-10/12 overflow-auto'}>

                <img className={'w-full text-white'} src={destination.image} alt={destination.title[lang]} />

                <div className={'p-8'}>
                    <h1 className={'py-4 text-center text-4xl'}>{destination.title[lang]}</h1>
                    <div className={'h-px bg-white my-2'} />

                    <DestinationInfoItem title={Locals.price} value={destination.price[lang]} inline={true} />
                    <DestinationInfoItem title={Locals.duration} value={destination.duration[lang]} inline={true} />
                    <DestinationInfoItem title={Locals.description} value={destination.description[lang]} inline={false} />
                    <DestinationInfoItem title={Locals.for_booking} value={destination.bookingInfo[lang]} inline={false} />

                    {
                        destination.images?.length &&
                        <div className={'py-4'}>
                            <DestinationImages images={destination.images} />
                        </div>
                    }

                </div>

            </div>
        </div>
    }

}
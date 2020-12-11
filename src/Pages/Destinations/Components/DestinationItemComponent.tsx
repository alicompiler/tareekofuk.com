import * as React from "react";
import { getCurrentLanguage } from "../../../Localization/Language";
import { DestinationItem } from "../DestinationPageDescriptor";

interface Props {
    onSelect: (destinationItem: DestinationItem) => void;
    destinationItem: DestinationItem;
}

export class DestinationItemComponent extends React.Component<Props> {
    render(): any {
        const { onSelect, destinationItem } = this.props;
        const lang = getCurrentLanguage();

        return <div className={'relative overflow-hidden cursor-pointer'}
            onClick={() => onSelect(destinationItem)}>

            <img src={destinationItem.image} className={'image-zoom-in w-full'} alt={destinationItem.title[lang]} />
            <div className={'bottom-0 w-full left-0 p-4 bg-indigo-900 bg-opacity-75 absolute'}>
                <header className={'text-center text-white text-xl font-bold'}>{destinationItem.title[lang]}</header>
            </div>

        </div>
    }
}
import * as React from "react";
import { getCurrentLanguage, LocalString } from "../../../Localization/Language";
import { DestinationItem } from "../DestinationPageDescriptor";
import { DestinationListComponent } from "./DestinationListComponent";

interface Props {
    title: LocalString;
    destinationsKeys: string[];
    allDestinations: DestinationItem[];
    onSelect: (destination: DestinationItem) => void;
}

export class DestinationGroupComponent extends React.Component<Props> {
    render(): any {
        const { allDestinations, destinationsKeys, title, onSelect } = this.props;
        const lang = getCurrentLanguage();
        const destinations = allDestinations.filter(d => destinationsKeys.includes(d.key));
        return <div>
            <header className={'text-2xl text-white mb-8'}>{title[lang]}</header>
            <DestinationListComponent onSelect={destination => onSelect(destination)}
                destinations={destinations} />
        </div>
    }
}
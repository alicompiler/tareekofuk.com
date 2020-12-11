import * as React from "react";
import { DestinationItem } from "../DestinationPageDescriptor";
import { DestinationItemComponent } from "./DestinationItemComponent";

interface Props {
    destinations: DestinationItem[];
    onSelect: (destinationItem: DestinationItem) => void;
}

export class DestinationListComponent extends React.Component<Props> {

    render(): any {
        const { onSelect, destinations } = this.props;
        return <div className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'}>
            {
                destinations.map((destination, index) => <DestinationItemComponent onSelect={onSelect}
                    destinationItem={destination} key={index} />)
            }
            <div className="my-16" />
        </div>;
    }

}
import * as React from "react";
import { Locals } from "../../../../Localization/Locals";
import { SectionTitle } from "./../../../../Components/SectionTitle/SectionTitle";
import { DestinationItem } from "./../../../Destinations/DestinationPageDescriptor";
import { DestinationListComponent } from "./../../../Destinations/Components/DestinationListComponent";
import { DestinationModal } from "./../../../../Components/DestinationModel/DestinationModal";

interface Props {
    destinations: DestinationItem[];
}
interface State {
    selectedDestination?: DestinationItem;
}

export class DestinationsSection extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { selectedDestination: undefined };
    }

    render(): any {
        const { selectedDestination } = this.state;
        return <div>
            <SectionTitle title={Locals.destinations} />
            <DestinationListComponent onSelect={d => this.setState({ selectedDestination: d })}
                destinations={this.props.destinations} />
            <DestinationModal onClose={() => this.setState({ selectedDestination: undefined })} destination={selectedDestination} />
        </div>
    }
}
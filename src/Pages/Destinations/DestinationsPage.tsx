import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { withAppDescriptor } from "../../AppDescriptor/AppDescriptorContext";
import HeaderContainer from "../../Components/Header/HeaderContainer";
import { DestinationItem, DestinationPageDescriptor } from "./DestinationPageDescriptor";
import { DestinationModal } from "../../Components/DestinationModel/DestinationModal";
import { DestinationGroupComponent } from "./Components/DestinationGroupComponent";
import { Locals } from "../../Localization/Locals";
import FooterContainer from "../../Components/Footer/FooterContainer";

interface Props {
    appDescriptor: AppDescriptor;
}

interface State {
    selectedDestination?: DestinationItem;
}


class DestinationsPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { selectedDestination: undefined };
    }

    render(): any {
        const { appDescriptor } = this.props;
        const destinationPage: DestinationPageDescriptor = appDescriptor.pages.destinations as any;
        const groups = destinationPage.sections.main.groups;
        return <div className="container mx-auto">
            <HeaderContainer displayHome />
            <br />
            <header className={'text-3xl text-white'}>{Locals.destinations}</header>
            <hr />
            <div className="my-16" />

            {
                groups.map((group, index) => <DestinationGroupComponent key={index} onSelect={d => this.setState({ selectedDestination: d })}
                    title={group.title} destinationsKeys={group.destinations}
                    allDestinations={destinationPage.destinations} />)
            }


            <FooterContainer />

            <DestinationModal onClose={() => this.setState({ selectedDestination: undefined })}
                destination={this.state.selectedDestination} />
        </div>
    }

}


export default withAppDescriptor(DestinationsPage);
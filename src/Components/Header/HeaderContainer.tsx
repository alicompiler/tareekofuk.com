import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { Header } from "./Header";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
    displayHome?: boolean;
}
class HeaderContainer extends React.Component<Props> {
    render(): any {
        const { appDescriptor, displayHome } = this.props;
        return <Header menu={appDescriptor.menu} metadata={appDescriptor.meta} displayHome={displayHome} />
    }
}


export default withAppDescriptor(HeaderContainer);
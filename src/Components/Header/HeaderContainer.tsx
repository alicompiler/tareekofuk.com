import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { Header } from "./Header";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
}
class HeaderContainer extends React.Component<Props> {
    render(): any {
        const { appDescriptor } = this.props;
        return <Header menu={appDescriptor.menu} metadata={appDescriptor.meta} />
    }
}


export default withAppDescriptor(HeaderContainer);
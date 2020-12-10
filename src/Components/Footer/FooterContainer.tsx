import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";

import * as React from "react";
import { Footer } from "./Footer";
import { withAppDescriptor } from "../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
}
class FooterContainer extends React.Component<Props> {
    render(): any {
        return <Footer metadata={this.props.appDescriptor.meta} />
    }
}

export default withAppDescriptor(FooterContainer);
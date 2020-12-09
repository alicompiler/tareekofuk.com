import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { SocialMediaBar } from "./SocialMediaBar";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
    zoomable: boolean;
}

class SocialMediaBarContainer extends React.Component<Props> {
    render(): any {
        const socialMedia = this.props.appDescriptor.socialMedia;
        return <SocialMediaBar zoomable={this.props.zoomable} socialMedia={socialMedia} />
    }
}

export default withAppDescriptor(SocialMediaBarContainer);
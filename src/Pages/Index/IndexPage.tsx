import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext"
import { LandingPage } from "./Components/Landing/LandingPage";
import { IndexPageDescriptor } from "./IndexPageDescriptor";
import { ServicesSection } from "./Components/ServicesSection/ServicesSection";
import { PartnersSection } from "./Components/Partners/PartnersSection";
interface Props {
    appDescriptor: AppDescriptor;
}
class IndexPage extends React.Component<Props>{

    render() {
        const indexPage: IndexPageDescriptor = this.props.appDescriptor.pages["index"] as any;
        return <div className={'text-white overflow-x-hidden bg-gray-900'}>
            <LandingPage appDescriptor={this.props.appDescriptor} landingPage={indexPage.sections.landing} />
            <ServicesSection services={indexPage.sections.services.services} />
            <PartnersSection sliderSettings={indexPage.sections.partners.sliderSettings}
                partners={indexPage.sections.partners.partners} />
        </div>
    }

}


export default withAppDescriptor(IndexPage);
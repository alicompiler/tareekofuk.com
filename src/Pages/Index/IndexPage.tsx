import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext"
import { LandingPage } from "./Components/Landing/LandingPage";
import { IndexPageDescriptor } from "./IndexPageDescriptor";
import { ServicesSection } from "./Components/ServicesSection/ServicesSection";
import { PartnersSection } from "./Components/Partners/PartnersSection";
import { ContactSection } from "./Components/Contact/ContactSection";
import FooterContainer from "./../../Components/Footer/FooterContainer";
import { DestinationPageDescriptor } from "../Destinations/DestinationPageDescriptor";
import { DestinationsSection } from "./Components/DestinationsSection/DestinationsSection";
interface Props {
    appDescriptor: AppDescriptor;
}
class IndexPage extends React.Component<Props>{

    render() {
        const indexPage: IndexPageDescriptor = this.props.appDescriptor.pages["index"] as any;
        const destinationsPage: DestinationPageDescriptor = this.props.appDescriptor.pages["destinations"] as any;
        const destinations = destinationsPage.destinations.filter(d => indexPage.sections.destination.destinationsKeys.includes(d.key));
        return <div className={'text-white overflow-x-hidden bg-gray-900'}>
            <LandingPage appDescriptor={this.props.appDescriptor} landingPage={indexPage.sections.landing} />
            <ServicesSection services={indexPage.sections.services.services} />
            <DestinationsSection destinations={destinations} />
            <PartnersSection sliderSettings={indexPage.sections.partners.sliderSettings}
                partners={indexPage.sections.partners.partners} />
            <ContactSection contactInfo={indexPage.sections.contact} />
            <FooterContainer />
        </div>
    }

}


export default withAppDescriptor(IndexPage);
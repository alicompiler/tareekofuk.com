import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { withAppDescriptor } from "../../AppDescriptor/AppDescriptorContext";
import FooterContainer from "../../Components/Footer/FooterContainer";
import { getCurrentLanguage } from "../../Localization/Language";
import { Locals } from "../../Localization/Locals";
import HeaderContainer from "./../../Components/Header/HeaderContainer";
import { AboutPageDescriptor } from "./AboutPageDescriptor";
import { StaffComponent } from "./Components/StaffComponent";

export interface Props {
    appDescriptor: AppDescriptor;
}

class AboutPage extends React.Component<Props> {

    render(): any {
        const { appDescriptor } = this.props;
        const aboutPage: AboutPageDescriptor = appDescriptor.pages["about"] as any;
        const lang = getCurrentLanguage();
        return <div className="container mx-auto text-white">
            <HeaderContainer displayHome/>
            <hr />

            <header className="text-2xl text-center my-4">{Locals.about_us}</header>
            <p className="font-bold p-4">{aboutPage.aboutText[lang]}</p>
            <img className="w-10/12 rounded-lg mx-auto" alt="staff image" src={aboutPage.staff.mainImage} />

            <div className="p-8" />

            <StaffComponent members={aboutPage.staff.members} />


            <FooterContainer />

        </div>;
    }

}

export default withAppDescriptor(AboutPage);
import React from "react";
import { AppDescriptor } from "../../../../AppDescriptor/AppDescriptor";
import { LandingPageDescriptor } from "../../IndexPageDescriptor";
import { LandingPageBackground } from "./LandingPageBackground";
import { MainContent } from "./MainContent";

interface Props {
    landingPage: LandingPageDescriptor;
    appDescriptor: AppDescriptor;
}

export class LandingPage extends React.Component<Props> {


    render(): any {
        const { landingPage, appDescriptor } = this.props;

        return <div className={'h-screen w-screen overflow-hidden relative'}>

            <div className={'absolute top-0 left-0 w-full h-full'}>
                <div className={'relative w-full h-full'}>
                    <LandingPageBackground landingPage={landingPage} />
                    <div className={'absolute w-full h-full z-20 bg-black'} style={{ opacity: landingPage.opacity }} />
                </div>
            </div>

            <MainContent appDescriptor={appDescriptor} />

        </div>
    }
}
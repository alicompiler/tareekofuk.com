import React from "react";
import { LandingPageDescriptor } from "../../IndexPageDescriptor";
import { LandingPageBackgroundContainer } from "./LandingPageBackgroundContainer";


interface Props {
    landingPage: LandingPageDescriptor;
}

export class LandingPage extends React.Component<Props> {


    render(): any {
        const { landingPage } = this.props;

        return <div className={'h-screen w-screen overflow-hidden relative'}>

            <div className={'absolute top-0 left-0 w-full h-full'}>
                <div className={'relative w-full h-full'}>
                    <LandingPageBackgroundContainer landingPage={landingPage} />
                    <div className={'absolute w-full h-full z-20 bg-black'} style={{ opacity: landingPage.opacity }} />
                </div>
            </div>

            {/* <Main/> */}

            <h1 className='text-center text-4xl'>THIS IS SOME TESTING CONTENT</h1>

        </div>
    }
}
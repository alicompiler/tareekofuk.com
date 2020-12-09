import React from "react";
import { DomIdAppAction, RouteAppAction } from "../../../../AppDescriptor/AppActionDescriptor/AppActionDescriptorComponent";
import { AppDescriptor, AppDescriptorActionType } from "../../../../AppDescriptor/AppDescriptor";
import { getCurrentLanguage } from "../../../../Localization/Language";
import HeaderContainer from "./../../../../Components/Header/HeaderContainer";
import { Locals } from "./../../../../Localization/Locals";
import SocialMediaBarContainer from "./../../../../Components/SocialMediaBar/SocialMediaBarContainer";
interface Props {
    appDescriptor: AppDescriptor;
}
export class MainContent extends React.Component<Props> {

    render(): any {

        const { appDescriptor } = this.props;
        const metadata = appDescriptor.meta;
        const lang = getCurrentLanguage();

        const buttonClass = "rounded-full text-lg cursor-pointer text-center text-lg transition duration-500 ease-in-out py-2 px-4 text-white bg-indigo-500 hover:bg-indigo-300 hover:text-black";

        return <div className={'h-full w-full absolute flex flex-col top-0 left-0 z-50 items-center'}>
            <div className={'container flex flex-col h-full'}>

                <HeaderContainer />


                <div className={'flex flex-1 justify-center items-center flex-col'}>

                    <p className={'text-2xl md:text-4xl lg:text-6xl text-white'}>{metadata.title[lang]}</p>
                    <p className={'md:text-2xl text-center text-gray-500'}>{metadata.slogan[lang]}</p>

                    <br />

                    <div className={'grid md:grid-flow-col md:auto-cols-max items-center gap-4'}>
                        <RouteAppAction action={{ type: AppDescriptorActionType.ROUTE, value: "destinations" }}>
                            <button className={buttonClass}>
                                {Locals.destinations}
                            </button>
                        </RouteAppAction>

                    </div>

                </div>

                <SocialMediaBarContainer zoomable={true} />

            </div>
        </div>
    }

}

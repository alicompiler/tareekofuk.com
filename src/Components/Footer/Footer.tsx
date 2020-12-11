import * as React from "react";
import { getCurrentLanguage } from "../../Localization/Language";
import { AppMetadataDescriptor } from "./../../AppDescriptor/AppDescriptor";
import SocialMediaBarContainer from "./../SocialMediaBar/SocialMediaBarContainer"

interface Props {
    metadata: AppMetadataDescriptor;
}

export class Footer extends React.Component<Props> {

    render(): any {
        const { metadata } = this.props;
        const lang = getCurrentLanguage();

        return <div className={'bg-gray-900 p-8 border-t border-white'}>


            <div className={'p-4 justify-center items-center flex flex-col md:flex-row'}>
                <img src={'/res/images/wta_logo.png'} alt={'WTA'} className={'w-16'} />
                <img src={'/res/images/wta_logo.png'} alt={'WTA'} className={'w-16'} />
            </div>

            <div className="flex items-center justify-center gap-4">

                <div className="w-24 h-24 p-4 bg-white rounded flex items-center justify-center">
                    <img className="w-full image-zoom-in" src="https://www.unwto.org/themes/unwto/images/unwto_logo.png" />
                </div>
                <div className="w-24 h-24 p-4 bg-white rounded flex items-center justify-center">
                    <img className="w-full image-zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Iata_official_logo.png/600px-Iata_official_logo.png" />
                </div>
                <div className="w-24 h-24 p-4 bg-white rounded flex items-center justify-center">
                    <img className="w-full image-zoom-in" src="https://www.oneplanetnetwork.org/sites/default/files/screenshot_168_0.png" />
                </div>
                <div className="w-24 h-24 p-4 bg-white rounded flex items-center justify-center">
                    <img className="w-full image-zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/1280px-AT%26T_logo_2016.svg.png" />
                </div>

            </div>

            <div className={'text-center flex items-center justify-center'}>
                <SocialMediaBarContainer />
            </div>

            <div>
                <h1 className={'text-white text-xl text-center'}>{metadata.copyrightText[lang]}</h1>
            </div>
        </div>
    }
}
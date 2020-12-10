import * as React from "react";
import { getCurrentLanguage } from "../../../../Localization/Language";
import { Partner } from "../../IndexPageDescriptor";

interface Props {
    partner: Partner;
}

export class PartnerItem extends React.Component<Props> {


    render(): any {
        const { partner, ...sliderProps } = this.props;
        const lang = getCurrentLanguage();
        return <div {...sliderProps}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >

                <div className="flex items-center justify-center flex-col p-8">
                    {/* <header className='text-2xl text-indigo-300'>{partner.title[lang]}</header> */}
                    {/* <div className="p-8" /> */}
                    <img className={"w-full lg:w-9/12"} style={{ filter: 'brightness(0) invert(1)' }} src={partner.logo} />
                </div>

                <div className="hidden md:flex items-center">
                    <ul className="border border-white rounded p-8">
                        {
                            partner.details.map((item, index) =>
                                <li key={index} className="text-xl text-gray-200 list-disc">{item[lang]}</li>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    }

}
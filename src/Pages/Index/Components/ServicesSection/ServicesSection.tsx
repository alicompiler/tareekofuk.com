import * as React from "react";
import { SectionTitle } from "../../../../Components/SectionTitle/SectionTitle";
import { Service } from "./../../IndexPageDescriptor";
import { Locals } from "./../../../../Localization/Locals";
import { getCurrentLanguage } from "../../../../Localization/Language";


interface Props {
    services: Service[];
}

export class ServicesSection extends React.Component<Props> {
    render(): any {

        const { services } = this.props;
        const lang = getCurrentLanguage();

        return <div className={'container mx-auto py-16 px-4'} id={"services"}>
            <SectionTitle title={Locals.services} />
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24'}>
                {
                    services.map((service, index) =>
                        <div key={index} className={'shadow rounded p-8 bg-white'}>
                            <div className={'flex justify-center items-center flex-col'}>
                                <img alt={'service-icon'} src={service.icon} className={"w-8 h-8 mb-4"} />
                                <p className={"text-xl text-black font-bold"}>{service.title[lang]}</p>
                                <br />
                                <p className={"text-gray-700"}>{service.description[lang]}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    }
}
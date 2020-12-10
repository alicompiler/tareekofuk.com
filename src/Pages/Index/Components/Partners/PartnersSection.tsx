import * as React from "react";
import { SectionTitle } from "./../../../../Components/SectionTitle/SectionTitle";
import { Locals } from "../../../../Localization/Locals";
import { Partner } from "./../../IndexPageDescriptor";
import { PartnerItem } from "./PartnerItem";
import Slider from "react-slick";

interface Props {
    partners: Partner[];
    sliderSettings: any;
}

export class PartnersSection extends React.Component<Props> {

    render(): any {
        const { partners, sliderSettings } = this.props;

        const settings = { ...sliderSettings };

        return <div className="container mx-auto py-16 px-8">
            <SectionTitle title={Locals.partners} />
            <Slider {...settings}>
                {
                    partners.map((partner, index) => <PartnerItem key={index} partner={partner} />)
                }
            </Slider>
        </div>
    }

} 
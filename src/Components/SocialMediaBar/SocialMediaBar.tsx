import * as React from "react";
import { SocialMediaDescriptor } from "./../../AppDescriptor/AppDescriptor";

interface Props {
    socialMedia: SocialMediaDescriptor[];
    zoomable: boolean;
}
export class SocialMediaBar extends React.Component<Props> {
    render(): any {
        const { socialMedia, zoomable } = this.props;
        return <div className={'lg:px-24 lg:py-16 md:px-16 md:py-12 p-8 flex justify-center items-center'}>
            <div className={'grid grid-flow-col auto-cols-max items-center gap-4 md:gap-8'}>
                {
                    socialMedia.map((link, index) =>
                        <a key={index} href={link.url} target={'_blank'} className={"courser-pointer"}>
                            <img alt={'social-link'} src={link.logo} className={`w-8 h-8 md:w-12 md:h-12 ${zoomable ? "image-zoom-in" : ""}`} />
                        </a>
                    )
                }
            </div>
        </div>
    }
}
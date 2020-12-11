import * as React from "react";
import { Locals } from "../../Localization/Locals";

interface Props {
    images: string[];
}
export class DestinationImages extends React.Component<Props> {
    render(): any {
        const { images } = this.props;
        return <React.Fragment>
            <h1 className={'text-xl font-bold text-indigo-500 my-2'}>{Locals.images}</h1>
            <div className={'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
                {
                    images.map((image, index) =>
                        <a key={index} className={'cursor-pointer w-full'} href={image} target={'_blank'}>
                            <img alt={'image'} src={image} key={index} className={'w-full'} />
                        </a>
                    )
                }
            </div>
        </React.Fragment>
    }
}
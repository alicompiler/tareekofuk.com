import * as React from "react";
import { getCurrentLanguage, LocalString } from "../../../../Localization/Language";


interface Props {
    addresses: LocalString[];
}

export class AddressComponent extends React.Component<Props> {
    render(): any {
        const { addresses } = this.props;
        const lang = getCurrentLanguage();
        return <div className={'flex  items-center md:items-start flex-col'}>
            <img className={'w-12 h-12 inline-block mb-8'} src={'/res/icons/place-mark.png'} alt={'place'} />
            {
                addresses.map((value, index) =>
                    <p key={index} className={'font-thin text-white'}>{value[lang]}</p>
                )
            }
        </div>;
    }
}
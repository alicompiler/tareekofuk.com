import { getCurrentLanguage, LocalString } from "../../../../Localization/Language";
import * as React from "react";

interface Props {
    phones: LocalString[];
}

export class PhoneComponent extends React.Component<Props>{

    render(): any {
        const { phones } = this.props;
        const lang = getCurrentLanguage();
        return <div className={'flex items-center md:items-center flex-col'}>
            <img className={'w-12 h-12 inline-block mb-8'} src={'/res/icons/telephone.png'} alt={'phone'} />
            {
                phones.map((value, index) =>
                    <p key={index} className={'font-thin text-white'}>{value[lang]}</p>
                )
            }
        </div>
    }
}
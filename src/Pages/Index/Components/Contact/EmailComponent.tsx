import * as React from "react";

interface Props {
    emails: string[];
}

export class EmailComponent extends React.Component<Props>{
    render(): any {
        const { emails } = this.props;
        return <div className={'flex items-center md:items-end flex-col'}>
            <img className={'w-12 h-12 inline-block mb-8'} src={'/res/icons/mail.png'} alt={'email'} />
            {
                emails.map((value, index) =>
                    <p key={index} className={'font-thin text-white'}>{value}</p>
                )
            }
        </div>
    }
}
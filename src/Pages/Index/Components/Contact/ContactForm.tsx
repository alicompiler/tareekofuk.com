import * as React from "react";
import { Locals } from "../../../../Localization/Locals";

export interface Props {

}

export class ContactForm extends React.Component<Props> {

    render(): any {
        return <div className={'p-8 flex w-full items-center flex-col'}>
            <input className={'w-full my-2 form-input'} type={'text'} placeholder={Locals.name} />
            <input className={'w-full my-2 form-input'} type={'email'} placeholder={Locals.email} />
            <input className={'w-full my-2 form-input'} type={'text'} placeholder={Locals.subject} />
            <textarea rows={5} className={'w-full p-2 my-2'} placeholder={Locals.message} />
            <br />
            <button className={'p-4 rounded bg-indigo-500 text-white w-150px'}>{Locals.send}</button>
        </div>
    }


}
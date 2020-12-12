import * as React from "react";
import { MenuOption } from "./../../AppDescriptor/AppDescriptor";
import { AppActionComponentFactory } from "./../../AppDescriptor/AppActionDescriptor/AppActionComponentFactory";
import { getCurrentLanguage } from "../../Localization/Language";
import { Locals } from "../../Localization/Locals";

interface Props {
    options: MenuOption[];
    onClose: () => void;
}

export class Drawer extends React.Component<Props>{
    render(): any {
        const { options, onClose } = this.props;
        const lang = getCurrentLanguage();
        return <div className="w-9/12">
            {
                options.map((option, index) => {
                    const ActionComponent = new AppActionComponentFactory(option.action).getActionComponent();
                    return <ActionComponent key={index} action={option.action} onClick={() => this.props.onClose()}>
                        <span className={'text-white text-xl cursor-pointer my-4 text-center rounded-full transition border duration-500 ease-in-out p-2 hover:text-black hover:bg-white w-full block'}>
                            {option.title[lang]}
                        </span>
                    </ActionComponent>
                })
            }
            <a onClick={() => onClose()}>
                <span className={'text-white text-xl cursor-pointer my-4 text-center rounded-full transition border duration-500 ease-in-out p-2 hover:text-black hover:bg-white w-full block'}>
                    {Locals.close}
                </span>
            </a>
        </div>
    }
}
import React from "react";
import { Link } from "react-router-dom";
import { AppActionComponentFactory } from "../../AppDescriptor/AppActionDescriptor/AppActionComponentFactory";
import { AppMetadataDescriptor, MenuDescriptor } from "./../../AppDescriptor/AppDescriptor";
import { getCurrentLanguage } from "./../../Core/Language";

interface Props {
    metadata: AppMetadataDescriptor;
    menu: MenuDescriptor;
}

export class Header extends React.Component<Props> {
    render(): any {

        const { menu, metadata } = this.props;
        const lang = getCurrentLanguage();

        return <div className={'lg:px-24 lg:py-16 md:px-16 md:py-8 p-4 flex justify-between'}>

            <Link to={'/'}>
                <div className={'flex items-center'}>
                    <img alt={'logo'} src={metadata.logo} className={'w-12 h-12 md:w-16 md:h-16'} />
                    <div className={'px-2'} />
                    <p className={'hidden md:inline md:text-lg lg:text-xl text-white'}>{metadata.title[lang]}</p>
                </div>
            </Link>

            <div className={'hidden lg:grid grid-flow-col auto-cols-max items-center gap-2'}>
                {
                    menu.options.map((option, index) => {
                        const ActionComponent = new AppActionComponentFactory(option.action).getActionComponent();
                        return <ActionComponent key={index} action={option.action}>
                            <span className={'text-white text-lg cursor-pointer text-center rounded-full transition duration-500 ease-in-out p-2 hover:text-black hover:bg-white'}>
                                {option.title[lang]}
                            </span>
                        </ActionComponent>
                    })
                }
            </div>

            <div className={'sm:flex items-center lg:hidden'}>
                <img alt={'logo'} src={'/res/icons/menu.png'} className={'w-8 h-8 md:w-12 md:h-12'} />
            </div>

        </div>
    }
}
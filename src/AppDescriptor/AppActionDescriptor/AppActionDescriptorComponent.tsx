import React from "react";
import { Link } from "react-router-dom";
import { getCurrentLanguage, setLanguage, SupportedLanguage } from "../../Core/Language";
import { AppActionDescriptor } from "../AppDescriptor";


interface Props {
    action: AppActionDescriptor;
}

export abstract class AppActionComponent extends React.Component<Props>{

    render(): any {
        const Wrapper = this.getWrapper();
        const props = this.getWrapperProps();

        return <Wrapper {...props}>
            {this.props.children}
        </Wrapper>
    }


    abstract getWrapper(): any;

    abstract getWrapperProps(): any;

}

export class RouteAppAction extends AppActionComponent {
    getWrapper(): any {
        return Link;
    }

    getWrapperProps(): any {
        return {
            to: this.props.action.value
        }
    }
}


export class DomIdAppAction extends AppActionComponent {
    getWrapper(): any {
        return "a";
    }

    getWrapperProps(): any {
        return {
            href: this.props.action.value
        }
    }
}


export class ChangeLanguageAppAction extends DomIdAppAction {
    getWrapperProps(): any {
        return {
            onClick: () => this.changeLanguage()
        }
    }

    private changeLanguage(): void {
        const currentLang = getCurrentLanguage();
        let lang: SupportedLanguage;
        if (currentLang === "ar") {
            lang = "en";
        } else {
            lang = "ar";
        }
        setLanguage(lang);
    }
}
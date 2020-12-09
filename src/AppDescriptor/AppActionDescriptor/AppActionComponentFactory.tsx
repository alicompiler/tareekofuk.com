import { AppActionComponent, ChangeLanguageAppAction, DomIdAppAction, RouteAppAction } from './AppActionDescriptorComponent';
import { AppActionDescriptor, AppDescriptorActionType } from '../AppDescriptor';

export class AppActionComponentFactory {

    private action: AppActionDescriptor;

    constructor(action: AppActionDescriptor) {
        this.action = action;
    }

    getActionComponent(): typeof AppActionComponent {
        switch (this.action.type) {
            case AppDescriptorActionType.ROUTE:
                return RouteAppAction;
            case AppDescriptorActionType.DOM_ID:
                return DomIdAppAction;
            case AppDescriptorActionType.CHANGE_LANGUAGE:
                return ChangeLanguageAppAction;
        }

        throw Error(`cannot recognize action with type ${this.action.type}`);
    }
}
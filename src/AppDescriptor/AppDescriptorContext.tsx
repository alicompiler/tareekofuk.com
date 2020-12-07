import { AppDescriptor } from './AppDescriptor';
import * as React from "react";
import { useContext } from 'react';

export const AppDescriptorContext = React.createContext({} as any);

export function withAppDescriptor(Component: any) {
    return function (props: any) {
        const value: AppDescriptor = useContext(AppDescriptorContext);
        return <Component appDescriptor={value} {...props} />;
    }
}
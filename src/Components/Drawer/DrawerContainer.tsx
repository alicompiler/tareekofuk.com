import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { Drawer } from "./Drawer";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
    open: boolean;
    onClose: () => void;
}

class DrawerContainer extends React.Component<Props> {
    render(): any {
        const { appDescriptor, open, onClose } = this.props;
        if (!open) {
            return null;
        }
        return <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-gray-900"
            style={{ zIndex: 99999999 }}>
            <Drawer options={appDescriptor.menu.options} onClose={onClose} />
        </div>
    }
}


export default withAppDescriptor(DrawerContainer);
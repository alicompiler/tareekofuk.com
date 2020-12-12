import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { Header } from "./Header";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext";
import DrawerContainer from "./../Drawer/DrawerContainer";

interface Props {
    appDescriptor: AppDescriptor;
    displayHome?: boolean;
}

function HeaderContainer(props: Props) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const { appDescriptor, displayHome } = props;
    return <React.Fragment>
        <Header menu={appDescriptor.menu} metadata={appDescriptor.meta} displayHome={displayHome} onDrawer={() => setOpenDrawer(true)} />
        <DrawerContainer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </React.Fragment>
}


export default withAppDescriptor(HeaderContainer);
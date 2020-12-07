import * as React from "react";
import { AppDescriptor } from "../../AppDescriptor/AppDescriptor";
import { withAppDescriptor } from "./../../AppDescriptor/AppDescriptorContext"
import { IndexPageDescriptor } from "./IndexPageDescriptor";
interface Props {
    app: AppDescriptor;
}
class IndexPage extends React.Component<Props>{

    render() {
        const indexPage: IndexPageDescriptor = this.props.app.pages["index"] as any;

        return <div className={'text-white overflow-x-hidden bg-gray-900'}>

        </div>
    }

}


export default withAppDescriptor(IndexPage);
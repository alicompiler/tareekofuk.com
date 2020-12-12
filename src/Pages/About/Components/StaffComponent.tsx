import * as React from "react";
import { StaffMember } from "../AboutPageDescriptor";
import { MemberComponent } from "./MemberComponent";

export interface Props {
    members: StaffMember[];
}

export class StaffComponent extends React.Component<Props> {

    render(): any {
        const { members } = this.props;
        return <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
            {
                members.map((member, index) => <MemberComponent member={member} key={index} />)
            }
        </div>;
    }

}
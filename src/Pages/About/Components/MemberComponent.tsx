import *  as React from "react";
import { getCurrentLanguage } from "../../../Localization/Language";
import { StaffMember } from "../AboutPageDescriptor";
export interface Props {
    member: StaffMember;
}

export class MemberComponent extends React.Component<Props> {
    render(): any {
        const { member } = this.props;
        const lang = getCurrentLanguage();
        return <div className="bg-white rounded">
            <div className="bg-black text-center">
                <img className="h-56 mx-auto" src={member.image} alt={member.name.en} />
            </div>
            <div className="p-4 text-center">
                <b className="text-sm text-black truncate">{member.name[lang]}</b>
                <p className="text-sm text-gray-700 truncate">{member.jobTitle[lang]}</p>
                <p className="text-sm text-gray-700 truncate">{member.mobile}</p>
                <p className="text-sm text-gray-700 truncate">{member.email}</p>
            </div>
        </div>
    }
}
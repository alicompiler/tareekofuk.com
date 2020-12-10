import * as React from "react";
import { SectionTitle } from "./../../../../Components/SectionTitle/SectionTitle";
import { Locals } from "./../../../../Localization/Locals";
import { ContactInfo } from "./../../IndexPageDescriptor";
import { AddressComponent } from "./AddressComponent";
import { ContactForm } from "./ContactForm";
import { EmailComponent } from "./EmailComponent";
import { PhoneComponent } from "./PhoneComponent";

interface Props {
    contactInfo: ContactInfo;
}

export class ContactSection extends React.Component<Props> {
    render(): any {
        const { contactInfo } = this.props;
        return <div className={'container mx-auto py-16 px-4'} id={"contact"}>
            <SectionTitle title={Locals.contact_us} />

            <div className={'grid gap-4 md:grid-cols-3 p-8 text-center'}>
                <AddressComponent addresses={this.props.contactInfo.addresses} />

                <PhoneComponent phones={contactInfo.phones} />

                <EmailComponent emails={contactInfo.emails} />

            </div>

            <ContactForm />

        </div>
    }
}
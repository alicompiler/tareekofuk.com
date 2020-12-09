import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    route?: string;
}
export class SectionTitle extends React.Component<Props> {
    render(): any {
        const { title, route } = this.props;
        const Wrapper: any = route ? Link : React.Fragment;
        const wrapperProps = route ? { to: route } : {};
        return <Wrapper {...wrapperProps}>
            <header className={'text-3xl text-center text-white my-16 text-indigo-200'}>{title}</header>
        </Wrapper>
    }
}
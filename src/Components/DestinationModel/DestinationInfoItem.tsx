import * as React from "react";

interface Props {
    title: string;
    value: string;
    inline: boolean;
}
export class DestinationInfoItem extends React.Component<Props> {

    render(): any {
        const { title, value, inline } = this.props;
        return <div className={`flex py-2 ${!inline ? "flex-col" : ""}`}>
            <h1 className={'text-xl font-bold text-indigo-500 w-32'}>{title}</h1>
            {inline && <p className={'px-2'}>:</p>}
            <p className={'font-thin'}>{value}</p>
        </div>
    }

}
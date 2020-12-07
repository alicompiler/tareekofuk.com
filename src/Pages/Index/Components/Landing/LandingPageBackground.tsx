import * as React from "react";

export interface Props {
    image: string;
}

export interface State {
    opacity: number;
}

export class LandingPageBackground extends React.Component<Props, State> {

    private readonly TIMEOUT_INTERVAL: number = 100;

    private timeoutId: any = undefined;

    constructor(props: Props) {
        super(props);
        this.state = { opacity: 0 };
    }

    private restartOpacity(): void {
        clearTimeout(this.timeoutId);
        this.setState({ opacity: 0 });
        this.timeoutId = setTimeout(() => this.setState({ opacity: 1 }), this.TIMEOUT_INTERVAL);
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.image !== this.props.image) {
            this.restartOpacity();
        }
    }

    render(): any {
        const { image } = this.props;
        const { opacity } = this.state;

        return <div className={'absolute top-0 left-0 w-full h-full'}>
            <div className={'w-full h-full relative'}>
                <div style={{ backgroundImage: `url(${image})`, opacity: opacity }}
                    className={'bg-center bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out'} />
            </div>
        </div>;
    }

}
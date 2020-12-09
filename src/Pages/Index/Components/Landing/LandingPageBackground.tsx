import * as React from "react";

export interface Props {
    image: string;
}

export class LandingPageBackground extends React.Component<Props> {

    private readonly TIMEOUT_INTERVAL: number = 250;
    private timeoutId: any = undefined;
    private backgroundDivRef: HTMLElement | null = null;

    private restartOpacity(): void {
        clearTimeout(this.timeoutId);
        this.setOpacityOfBackgroundDiv("0");
        this.timeoutId = setTimeout(() => this.setOpacityOfBackgroundDiv("1"), this.TIMEOUT_INTERVAL);
    }

    private setOpacityOfBackgroundDiv(opacity: string): void {
        if (this.backgroundDivRef) {
            this.backgroundDivRef.style.opacity = opacity;
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.image !== this.props.image) {
            this.restartOpacity();
        }
    }

    render(): any {
        const { image } = this.props;

        return <div className={'absolute top-0 left-0 w-full h-full'}>
            <div className={'w-full h-full relative'}>
                {
                    <div ref={ref => this.backgroundDivRef = ref}
                        style={{ backgroundImage: `url(${image})` }}
                        className={'bg-center bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out'} />
                }
            </div>
        </div>;
    }

}
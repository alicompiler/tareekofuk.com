import * as React from "react";
import { LandingPageDescriptor } from "./../../IndexPageDescriptor";
import { LandingPageBackground } from "./LandingPageBackground";

interface Props {
    landingPage: LandingPageDescriptor;
}

interface State {
    loadedImages: string[];
    currentImageIndex: number;
}

export class LandingPageBackgroundContainer extends React.Component<Props, State> {

    private intervalId: any = undefined;

    constructor(props: Props) {
        super(props);
        const startingImage = props.landingPage.images[0];
        this.state = { loadedImages: [startingImage], currentImageIndex: 0 };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.displayNextImage, this.props.landingPage.interval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    private displayNextImage = () => {
        const { loadedImages, currentImageIndex } = this.state;
        if (loadedImages.length > currentImageIndex + 1) {
            this.setState({ currentImageIndex: currentImageIndex + 1 });
        } else if (loadedImages.length === currentImageIndex + 1) {
            this.setState({ currentImageIndex: 0 });
        }
    }

    private markAsLoaded(image: string): void {
        this.setState({ loadedImages: [...this.state.loadedImages, image] });
    }

    render() {
        const { images } = this.props.landingPage;
        const { loadedImages, currentImageIndex } = this.state;
        const currentImage = loadedImages[currentImageIndex];

        return (
            <div className={'w-full h-full absolute top-0 left-0 z-10'}>
                <div className={'relative w-full h-full'}>
                    <div className={'hidden'}>
                        {
                            images.map((url, index) => <img key={index} alt={"image"} src={url} onLoad={() => this.markAsLoaded(url)} />)
                        }
                    </div>
                    <LandingPageBackground image={currentImage} />
                </div>
            </div>
        );
    }


}
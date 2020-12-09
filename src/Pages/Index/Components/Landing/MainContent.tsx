import React from "react";
import HeaderContainer from "./../../../../Components/Header/HeaderContainer";

export class MainContent extends React.Component {

    render(): any {
        return <div className={'h-full w-full absolute flex flex-col top-0 left-0 z-50 items-center'}>
            <div className={'container flex flex-col h-full'}>

                <HeaderContainer />

            </div>
        </div>
    }

}
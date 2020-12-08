import * as React from "react";
import { AppDescriptor } from "../AppDescriptor/AppDescriptor";
import { AppDescriptorContext } from "../AppDescriptor/AppDescriptorContext";
import { FakeAppDescriptorRepository } from "../AppDescriptor/FakeAppDescriptorRepository";
import { Router } from "./Router"

interface State {
    app?: AppDescriptor;
    loading: boolean;
    error: any;
}

export class Root extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = { loading: true, error: null };
    }

    async componentDidMount() {
        await this.loadAppDescriptor();
    }

    private async loadAppDescriptor(): Promise<void> {
        const repository = new FakeAppDescriptorRepository();
        this.setState({ loading: true, error: null });
        try {
            const appDescriptor = await repository.fetch();
            this.setState({ loading: false, app: appDescriptor, error: null });
        } catch (e) {
            this.setState({ loading: false, error: e, app: undefined });
        }
    }

    render() {
        const { app, loading, error } = this.state;
        //TODO : display error message and loading message

        if (loading) {
            return <h1>LOADING</h1>
        }

        if (error) {
            return <div>
                <h1>ERROR</h1>
                <p>{String(error)}</p>
            </div>;
        }

        return <AppDescriptorContext.Provider value={app}>
            <Router />
        </AppDescriptorContext.Provider>
    }

}
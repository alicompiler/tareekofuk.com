import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "../Pages/Index/IndexPage";
import DestinationsPage from "./../Pages/Destinations/DestinationsPage";
import AboutPage from "./../Pages/About/AboutPage";

export class Router extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={IndexPage} />
                <Route path={'/destinations'} component={DestinationsPage} />
                <Route path={'/who'} component={AboutPage} />
                <Route component={() => <h1 className={'text-center text-2xl'}>404</h1>} />
            </Switch>
        </BrowserRouter>
    }
}
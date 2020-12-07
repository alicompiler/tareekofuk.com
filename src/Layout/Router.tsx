import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IndexPage } from "../Pages/Index/IndexPage";

export class Router extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={IndexPage} />
                <Route component={() => <h1 className={'text-center text-2xl'}>404</h1>} />
            </Switch>
        </BrowserRouter>
    }
}
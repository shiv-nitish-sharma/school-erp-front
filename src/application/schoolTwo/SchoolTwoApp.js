import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Home from '../schoolTwo/components/pages';

class SchoolTwoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        console.log("props", this.props)
        return (
            <div>
                <Helmet>
                    <title>SchoolTwoApp</title>
                    <meta name="description" content="I am description meta tag" />
                    <meta name="keywords" cpntent="js-tutorials,keyword,listing" />
                </Helmet>
                <Switch>
                    <Route path={"/home"} render={(route) => <Home {...this.props} {...route} />} />
                    <Route path={"/"} render={(route) => <Home name="nitish sharma" {...route} />} />
                </Switch>
            </div>
        );
    }


}
export default SchoolTwoApp;

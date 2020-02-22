import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log("abs", this.props)
        return (
            <div>
                <p>Home {this.props.name}</p>
            </div>
        );
    }
}
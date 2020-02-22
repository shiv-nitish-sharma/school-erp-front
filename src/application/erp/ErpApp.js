import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch} from "react-router-dom";

class ErpApp extends Component {
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
          <title>ERP School</title>
          <meta name="description" content="I am description meta tag" />
          <meta name="keywords" cpntent="js-tutorials,keyword,listing" />
        </Helmet>
        <p>ErpApp School</p>
      </div>
    );
  }


}
export default ErpApp;

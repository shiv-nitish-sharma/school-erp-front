import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Home from './components/pages';

class SchoolOneApp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    console.log("props", this.props)
    let { name, hostName } = this.props;
    // console.log("ppp",hostName/+'/home')
    return (
      <div>
        <Helmet>
          <title>SchoolOneApp</title>
          <meta name="description" content="I am description meta tag" />
          <meta name="keywords" cpntent="js-tutorials,keyword,listing" />
        </Helmet>
        <Switch>
          <Route  path={"/home"} render={(route) => <Home {...this.props} {...route} />} />
          <Route path={"/"} render={(route) => <Home name="nitish" {...route}/>}/>
        </Switch>
      </div>
    );
  }


}
export default SchoolOneApp;

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import SchoolOneApp from './application/schoolOne/SchoolOneApp';
import SchoolTwoApp from './application/schoolTwo/SchoolTwoApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    console.log("host", this.props)
    let { hostName } = this.props;

    const project = () => {
      switch (hostName) {
        case "localhost:3000":
          return <SchoolOneApp name="schoolone" hostName={hostName} />
          break;
        case "localhost:3001":
          return <SchoolTwoApp name="schoolTwo" hostName={hostName} />
      }
    }
    return (
      <div>
        {project()}
      </div>
    );
  }


}
export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../src/App.css';
import {Helmet} from "react-helmet";

class App extends Component {
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
          <title>School 1</title>
          <meta name="description" content="I am description meta tag" />
          <meta name="keywords" cpntent="js-tutorials,keyword,listing" />
        </Helmet>
        <p>School 1</p>
      </div>
    );
  }


}
export default App;

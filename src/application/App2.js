import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../src/App.css';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        console.log("props", this.props)
        return (
            <div>
                <p>School 2</p>
            </div>
        );
    }


}
export default App2;

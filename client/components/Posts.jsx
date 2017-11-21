import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Posts extends Component {
    componentDidMount() {
        console.log("mounted");
    }

    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div><h1>Some posts here</h1></div>
    }
}

export default withRouter(Posts);
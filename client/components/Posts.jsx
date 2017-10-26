import React, { Component } from 'react';

class Posts extends Component {
    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div><h1>Some posts here</h1></div>
    }
}

export default Posts;
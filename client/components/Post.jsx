import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Post extends Component {
    componentDidMount() {
        console.log("mounted");
    }

    componentDidCatch(error, info) {        
        console.log("Caught: ",error, info);
    }

    render() {
        return <div>some specific post</div>
    }
}

export default withRouter(Post);
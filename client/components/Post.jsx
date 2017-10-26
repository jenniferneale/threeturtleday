import React, { Component } from 'react';

class Post extends Component {
    componentDidCatch(error, info) {        
        console.log("Caught: ",error, info);
    }

    render() {
        return <div></div>
    }
}

export default Post;
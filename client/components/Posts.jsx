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
        return <div className="posts center">
        <h2>Posts</h2>
        <ul>
            {this.props && this.props.blogPosts && this.props.blogPosts.map(bp => <li key={bp.id}>
                <NavLink to={`/blogposts/${bp.id}`}>
                    <div className="col-sm-6 blogposts center">
                        {bp.name}
                        <img src={bp.image} className="img-responsive" />
                        </div>
                    </NavLink>
                </li>
            )}
        </ul>
    </div>
    }
}

export default withRouter(Posts);
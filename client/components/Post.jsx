import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { stateProps, acts, fetchThings } from '../reducers';


class Post extends Component {
    componentDidMount() {
        console.log("mounted");
        this.props.fetchInitialData();
    }

    componentDidCatch(error, info) {        
        console.log("Caught: ",error, info);
    }

    render() {
        if(this.props.currentPost && this.props.currentPost.title)
        return <div className="row">    
                { (this.props.currentPost.id + 1 <= 26) && 
                <div className="col-sm-1">
                    <a href={`/posts/${this.props.currentPost.id+1}`}>
                    <span className="fas fa-angle-left fa-lg"></span>
                    </a>
                </div>
                }
                <div className="blogContainerCenter col-md-10">
                    <h2>{this.props.currentPost.title}</h2>
                    <p>{this.props.numPosts}</p>
                    <p><small>{this.props.currentPost.originalDate.slice(0,10)}</small></p>
                    <div dangerouslySetInnerHTML={{__html: this.props.currentPost.body}}></div>
                </div>
                { (this.props.currentPost.id - 1 > 0) && 
                <div className="col-sm-1">
                    <a href={`/posts/${this.props.currentPost.id-1}`}>
                    <span className="fas fa-angle-right fa-lg"></span>
                    </a>
                </div>
                }              
                </div>
        else return <div><p>Cannot find post with given id</p></div>;
    }
}
//TODO: Add left and right arrow to cycle through posts
const mapState = ({ currentPost, posts }) => ({ currentPost, posts });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            dispatch(fetchThings(stateProps.POSTS, acts.GET_POST, ownProps.match.params.id));
        }
    }
};

export default withRouter(connect(mapState, mapDispatchToProps)(Post));
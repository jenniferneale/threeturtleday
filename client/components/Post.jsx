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
        return <div>
            { this.props.currentPost && this.props.currentPost.title && 
                <div>
                    <h2>{this.props.currentPost.title}</h2>
                    <p><small>{this.props.currentPost.originalDate.slice(0,10)}</small></p>
                    <div>{this.props.currentPost.body}</div>
                </div>
            }            
        </div>
    }
}

const mapState = ({ currentPost }) => ({ currentPost });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            dispatch(fetchThings(stateProps.POSTS, acts.GET_POST, ownProps.match.params.id));
        }
    }
};

export default withRouter(connect(mapState, mapDispatchToProps)(Post));
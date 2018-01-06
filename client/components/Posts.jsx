import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { stateProps, acts, fetchThings } from '../reducers';
import { NavLink } from 'react-router-dom';

class Posts extends Component {
    componentDidMount() {
        console.log("mounted");
        this.props.fetchInitialData();
    }

    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div className="posts center">
        <ul>
            {this.props &&  this.props.posts && this.props.posts.map(bp =>             
                <NavLink to={`/posts/${bp.id}`} key={bp.id} className="item card col-md-4 col-sm-6 col-xs-12">                    
                    <div className="container col-xs-12">
                        <div className="col-xs-4 pull-left pic" style={{background:`url(${bp.cardImage}) no-repeat scroll center center / cover transparent`}}>
                        </div>
                        <div className="col-xs-8 pull-left">
                            <h3>{bp.title}</h3>
                            <p style={{textAlign:'justify'}}>{(bp.teaserText)? bp.teaserText : ""}</p>
                        </div>    				
                    </div>                
                </NavLink>
                
            )}
        </ul>
    </div>
    }
}

const mapState = ({ posts }) => ({ posts });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            dispatch(fetchThings(stateProps.POSTS, acts.GET_POSTS));
        }
    }
};

export default withRouter(connect(mapState, mapDispatchToProps)(Posts));
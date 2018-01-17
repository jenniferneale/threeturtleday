import Isotope from 'isotope-layout';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { stateProps, acts, fetchThings } from '../reducers';
import { NavLink } from 'react-router-dom';
import _ from 'underscore';


class Posts extends Component {
    constructor(props, context) {
        super(props, context);        
        this.createIsotopeContainer = this.createIsotopeContainer.bind(this);
    }

    createIsotopeContainer() {
        if (this.iso == null) {
            this.iso = new Isotope(ReactDOM.findDOMNode(this.refs.isotopeContainer), {
                // options
                itemSelector: '.card',
                percentPosition: true,
                masonry: {
                    columnWidth: '.card'
                  }
                });
        }
    }
    
    componentDidMount() {
        console.log("mounted");      
        this.props.fetchInitialData()

        this.createIsotopeContainer();        
        if(this.props.posts.length && this.props.posts.length > 0){
            console.log("calling arrange", this.props.posts.length);
            this.iso.arrange();
        }    
    }

    // Filter and sort are coming from the Parent.
    componentWillReceiveProps(nextProps) {
        if (nextProps.filter && !_.isEqual(nextProps.filter, this.props.filter)) {
            this.iso.arrange({ filter: this.filterFns[nextProps.filter] || nextProps.filter });
        }
        if (nextProps.sort != null) {
            this.iso.arrange({sortBy: nextProps.sort});
        }
    }
    
    componentDidUpdate(prevProps){
                // The list of keys seen in the previous render
                let currentKeys = _.map(this.iso.items, (n) => n.element.className.split(" ").pop());
                // The latest list of keys that have been rendered
                let newKeys = _.map(document.getElementsByClassName("card"), (n) => n.className.split(" ").pop());
                // Find which keys are new between the current set of keys and any new children passed to this component
                let addKeys = _.difference(newKeys, currentKeys);
                // Find which keys have been removed between the current set of keys and any new children passed to this component
                let removeKeys = _.difference(currentKeys, newKeys);        
                if (removeKeys.length > 0) {
                    _.each(removeKeys, removeKey => this.iso.remove(document.getElementsByClassName(removeKey)[0]));
                    this.iso.arrange();
                }
                if (addKeys.length > 0) {
                    this.iso.addItems(_.map(addKeys, (addKey) => document.getElementsByClassName(addKey)[0]));
                    this.iso.arrange();
        }
    }

    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div id="isotope-container" className="posts center container" ref="isotopeContainer">
            {/*<div className="grid-sizer card col-md-4"></div>*/}
            {this.props &&  this.props.posts && this.props.posts.map(bp =>             
                <div className={`card col-md-4 col-sm-6 col-xs-12 card${bp.id}`} key={bp.id} >
                <NavLink to={`/posts/${bp.id}`}  >                    
                { bp.cardImage?
                    <div className="container col-xs-12">                    
                    <div className="col-xs-12 pull-left">
                        <h3>{bp.title}</h3>
                        <p style={{textAlign:'justify'}}>{bp.teaserText}</p>
                    </div>    				
                </div>
                :
                bp.teaserText? 
                    <div className="container col-xs-12">
                        <div className="col-xs-4 pull-left pic" style={{background:`url(${bp.cardImage}) no-repeat scroll center center / cover transparent`}}>
                        </div>
                        <div className="col-xs-8 pull-left">
                            <h3>{bp.title}</h3>
                            <p style={{textAlign:'justify'}}>{bp.teaserText}</p>
                        </div>    				
                    </div>
                    :
                    <div className="container col-xs-12">
                        <div className="col-xs-12 pic" style={{background:`url(${bp.cardImage}) no-repeat scroll center center / cover transparent`}}>
                        </div>
                        <div className="col-xs-12 pull-left">
                            <h3>{bp.title}</h3>                            
                        </div>    				
                    </div>
                    }  
                </NavLink>
                </div>
                
            )}
        
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

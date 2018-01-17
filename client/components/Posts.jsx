import Isotope from 'isotope-layout';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { stateProps, acts, fetchThings } from '../reducers';
import { NavLink } from 'react-router-dom';


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
                    columnWidth: '.grid-sizer'
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
        /* */     //NEED WEBPACK LOADER??? TRY JQUERY ON CARD LOAD  
    }

    componentDidUpdate(prevProps){
        // The list of keys seen in the previous render
        /*let currentKeys = _.map(prevProps.children, (n) => n.key);

        // The latest list of keys that have been rendered
        let newKeys = _.map(this.props.children, (n) => n.key);

        // Find which keys are new between the current set of keys and any new children passed to this component
        let addKeys = _.difference(newKeys, currentKeys);

        // Find which keys have been removed between the current set of keys and any new children passed to this component
        let removeKeys = _.difference(currentKeys, newKeys);

        if (removeKeys.length > 0) {
            _.each(removeKeys, removeKey => this.iso.remove(document.getElementById(removeKey)));
            this.iso.arrange();
        }
        if (addKeys.length > 0) {
            this.iso.addItems(_.map(addKeys, (addKey) => document.getElementById(addKey)));
            this.iso.arrange();
        }*/
        this.iso.addItems(document.getElementsByClassName("card"));
        this.iso.arrange();
        console.log(this.iso);
    }

    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div id="isotope-container" className="posts center container" ref="isotopeContainer">
            <div className="grid-sizer card col-md-4"></div>
            {this.props &&  this.props.posts && this.props.posts.map(bp =>             
                <div className="card col-md-4 col-sm-6 col-xs-12" key={bp.id} >
                <NavLink to={`/posts/${bp.id}`}  >                    
                { bp.teaserText? 
                    <div className="container col-xs-12">
                        <div className="col-xs-4 pull-left pic" style={{background:`url(${bp.cardImage}) no-repeat scroll center center / cover transparent`}}>
                        </div>
                        <div className="col-xs-8 pull-left">
                            <h3>{bp.title}</h3>
                            <p style={{textAlign:'justify'}}>{bp.teaserText}</p>
                        </div>    				
                    </div>
                    :
                    <div className="container col-xs-12 huge">
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

/*{this.props &&  this.props.posts && this.props.posts.map(bp =>             
                <div className="card col-md-4 col-sm-6 col-xs-12" key={bp.id} >
                <NavLink to={`/posts/${bp.id}`}  >                    
                { bp.teaserText? 
                    <div className="container col-xs-12">
                        <div className="col-xs-4 pull-left pic" style={{background:`url(${bp.cardImage}) no-repeat scroll center center / cover transparent`}}>
                        </div>
                        <div className="col-xs-8 pull-left">
                            <h3>{bp.title}</h3>
                            <p style={{textAlign:'justify'}}>{bp.teaserText}</p>
                        </div>    				
                    </div>
                    :
                    <div className="container col-xs-12 huge">
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
         */
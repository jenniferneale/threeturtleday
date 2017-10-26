import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
//import { connect } from 'react-redux';
import Post from './Post.jsx';
import Posts from './Posts.jsx';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

class Root extends Component {
    
    componentDidCatch(error, info) {        
        console.log("Caught: ",error, info);
    }

    render() {
        return <div className="container">
            <header>
                <div className="logo-head">
                    <h1><span className="logo"><a href="index.html">Three Turtle Day</a>&nbsp;</span></h1>
                    <h2><small>Fiction & Software by Jennifer F. Neale</small></h2>
                </div>
                <div className="navbar navbar-default">
                <ul className="nav navbar-nav nav-pills">
                    <li><NavLink activeClassName="active" to="/posts">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
                    </div>
            </header>
            <Switch>
                <Route exact path='/posts' component={Posts} />
                <Route path='/posts/:id' component={Post} />
                {/*<Redirect to='/' />*/}
            </Switch>
        </div>
    }
}

export default Root;

//export default withRouter(connect(null, null)(Root));
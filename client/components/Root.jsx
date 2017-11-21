import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
//import { Route, Switch, Redirect } from 'react-router-dom'; //BrowserRouter as Router
import Post from './Post.jsx';
import Posts from './Posts.jsx';
import NotFound from './NotFound.jsx';
import Contact from './Contact.jsx';
import Portfolio from './Portfolio.jsx';
import { withRouter, NavLink } from 'react-router-dom'; //BrowserRouter as Router
//import { NavLink, withRouter } from 'react-router';
//import '../../public/yeti.bootstrap.min.css';
//import '../../public/style.css';

class Root extends Component {

    componentDidCatch(error, info) {
        console.log("Caught: ", error, info);
    }

    render() {
        return <div className="container">
            <header className="page-header top">
                <div className="logo-head">
                    <h1><span className="logo"><a href="index.html">Three Turtle Day</a>&nbsp;</span></h1>
                    <h2 className="subHeader"><small>Fiction & Software by Jennifer F. Neale</small></h2>
                </div>
                <div className="navbar navbar-default">
                    <ul className="nav navbar-nav nav-pills">
                        <li><NavLink activeClassName="active" to="/posts">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </header>
            <div className="container col-md-12">
                <Switch>
                    <Route exact path='/posts' component={Posts} />
                    <Route path='/posts/:id' component={Post} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/contact' component={Contact} />
                    <Route exact path='/' component={Posts} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
            <footer className="pull-right">
                <br />
                <ul className="list-inline">
                    <li>Jennifer F. Neale 2017</li>                    
                </ul>
            </footer>
        </div>
    }
}

export default withRouter(Root);

//export default withRouter(connect(null, null)(Root));
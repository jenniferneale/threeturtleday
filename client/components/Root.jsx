import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
//import { Route, Switch, Redirect } from 'react-router-dom'; //BrowserRouter as Router
import Post from './Post.jsx';
import Posts from './Posts.jsx';
import NotFound from './NotFound.jsx';
import About from './About.jsx';
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
                    <h1><span className="logo"><NavLink to="/posts">Three Turtle Day</NavLink>&nbsp;</span></h1>
                    <h2 className="subHeader"><small>Fiction & Software by Jennifer F. Neale</small></h2>
                </div>
                <div className="navbar navbar-default">
                    <ul className="nav navbar-nav nav-pills">
                        <li><NavLink className="nav-link" activeClassName="active" to="/posts">Home</NavLink></li>
                        <li><NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink></li>
                        <li><a href="mailto:jeneale6@gmail.com"><span className="fas fa-envelope fa-lg"></span></a></li>
                        <li><a href="http://www.linkedin.com/in/jennifer-neale-9700a054"><span className="fab fa-linkedin-in fa-lg"></span></a></li>
                        <li><a href="https://github.com/jenniferneale"><span className="fab fa-github fa-lg"></span></a></li>
                    </ul>
                </div>
            </header>
            <div className="container col-md-12">
                <Switch>
                    <Route exact path='/posts' component={Posts} />
                    <Route path='/posts/:id' component={Post} />
                    <Route path='/about' component={About} />
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
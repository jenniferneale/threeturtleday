'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import Root from './components/Root.jsx'
//import createHistory from 'history/createBrowserHistory';

//const history = createHistory();
//history={history}
render(<Provider store={store}>
    <Router >
        <Root />
    </Router>
</Provider>,
    document.getElementById('app')
)
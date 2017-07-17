import React from 'react';
import ReactDOM from 'react-dom';
// import logger from 'redux-logger';
// import {createstore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';


// import {provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';// 
import createBrowserHistory from 'history/createBrowserHistory';

import LoginPage from './pages/LoginPage';

// const store = createstore(reducer, applyMiddleware(thunk,logger));

const history = createBrowserHistory();

ReactDOM.render(// <Provider store={store}>
                   <Router history={history}>
            
                            <Switch>
                                <Route path='/' component={LoginPage} />
                            </Switch>
                    
                    </Router>
               // </Provider>, 
                ,document.getElementById('app'));

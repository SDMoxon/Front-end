/* global exact:true*/
/* eslint no-undef: "error"*/

import React from 'react';
import ReactDOM from 'react-dom';
// import logger from 'redux-logger';
// import {createstore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';


// import {provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';// 
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';

import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import PatientPage from './pages/PatientPage';
import MasterPage from './pages/MasterPage';

// const store = createstore(reducer, applyMiddleware(thunk,logger));

const history = createBrowserHistory();

ReactDOM.render(// <Provider store={store}>
	<Router history={history}>
		<Switch>
			<Route exact path='/' component={LoginPage} />
			<Route path='/user/:username' component={() => <MasterPage><UserPage/></MasterPage>} />
			<Route exact path='/patient/:patient_id' component={() => <MasterPage><PatientPage/></MasterPage>} />
		</Switch>
	</Router>
	// </Provider>, 
	, document.getElementById('app'));

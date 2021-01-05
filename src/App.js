import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />

				<Switch>
					<Route path="/login">
						<h1>Login Page</h1>
					</Route>

					<Route path="/checkout">
						<Checkout />
					</Route>
					
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

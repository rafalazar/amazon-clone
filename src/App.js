import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="app">
				<Switch>

					<Route path="/checkout">
						<Header />
						<h1>I am the Checkout Page :3</h1>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>

				</Switch>
			</div>
		</Router>
	);
}

export default App;

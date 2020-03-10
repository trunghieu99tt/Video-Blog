import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/main.css";

import BaseView from "./layout/BaseView";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/videos" component={Videos} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default BaseView(App);

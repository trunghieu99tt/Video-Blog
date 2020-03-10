import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/main.css";

import BaseView from "./layout/BaseView";
import Home from "./pages/Home";
import Introduction from "./components/home/Introduction";
import Popular from "./components/home/Popular";
import Trending from "./components/home/Trending";
import Latest from "./components/home/Latest";
import News from "./components/home/News";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Introduction />
				<Popular />
				<Trending />
				<Latest />
				<News />
			</React.Fragment>
		);
	}
}

export default BaseView(App);

import React, { Component } from "react";
import Introduction from "../components/home/Introduction";
import Popular from "../components/home/Popular";
import Trending from "../components/home/Trending";
import Latest from "../components/home/Latest";
import News from "../components/home/News";

export default class Home extends Component {
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

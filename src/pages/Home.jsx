import React, { Component } from "react";
import Introduction from "../components/home/Introduction";

export default class Home extends Component {
	render() {
		return (
			<section className="home">
				<Introduction />
			</section>
		);
	}
}

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

const BaseView = (WrappedComponent, props) => {
	return class extends Component {
		render() {
			return (
				<React.Fragment>
					<Header />
					<WrappedComponent {...props} />
					<Footer />
				</React.Fragment>
			);
		}
	};
};

export default BaseView;

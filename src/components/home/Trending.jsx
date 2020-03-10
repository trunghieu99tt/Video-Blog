import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import Card3 from "../Cards/card-3";

export default class Trending extends Component {
	render() {
		const options = {
			loop: true,
			// autoplay: true,
			// dots: true,nav: true,
			nav: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1170: {
					items: 3
				}
			}
		};

		return (
			<section className="trending">
				<div className="container">
					<div className="wrap-content">
						<div class="heading-post">
							<div class="text">
								<h3 class="title">Trending Categories </h3>

								<div class="description">
									The easiest way to check what's trending on
									the Internet{" "}
								</div>
							</div>
						</div>
						<div className="list-post">
							<OwlCarousel {...options} nav>
								{[...Array(4)].map(() => (
									<Card3 />
								))}
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import Card6 from "../Cards/card-6";
import Card7 from "../Cards/card-7";

export default class News extends Component {
	render() {
		const options = {
			loop: true,
			nav: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1170: {
					items: 1
				}
			}
		};

		return (
			<section className="newsfeed">
				<div className="container">
					<div className="wrap-content">
						<div class="heading-post">
							<h3 class="title">News feed</h3>

							<div class="description">
								News around the globe within your fingertips{" "}
							</div>
						</div>

						<div className="list-post">
							<OwlCarousel {...options} nav>
								<div className="post-item">
									<div className="row">
										<div className="col-lg-6">
											<Card6 />
										</div>

										<div className="col-lg-6">
											{[...Array(2)].map(() => (
												<Card7 />
											))}
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import Card2 from "../Cards/card-2";

export default class Popular extends Component {
	render() {
		const options = {
			loop: true,
			// autoplay: true,
			// dots: true,nav: true,
			nav: true,
			// navText: [
			// 	"<div className='nav-btn prev-slide'></div>",
			// 	"<div className='nav-btn next-slide'></div>"
			// ],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1170: {
					items: 4
				}
			}
		};
		return (
			<section className="popular-items">
				<div className="container">
					<div className="wrap-content">
						<div class="heading-post">
							<h3 class="title">Popular videos </h3>

							<a
								href="http://video-blog.thimpress.com/videos/"
								class="link"
							>
								See all news
							</a>
						</div>
						<div className="list-post">
							<OwlCarousel {...options} nav>
								{[...Array(4)].map(() => (
									<Card2 />
								))}
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

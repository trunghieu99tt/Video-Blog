import React, { Component } from "react";
import Card5 from "../Cards/card-5";
import Card4 from "../Cards/card-4";

export default class Latest extends Component {
	render() {
		return (
			<section className="latest">
				<div className="container">
					<div className="wrap-content">
						<div class="heading-post">
							<div class="wrap-title">
								<h3 class="title">Latest Videos </h3>
								<a href="#" class="link">
									See all news{" "}
								</a>
							</div>
							<div class="categories">
								<ul>
									<li>
										<a href="http://video-blog.thimpress.com/blog/archives/category/video/latest-videos/coming-soon-to-theaters">
											Coming Soon to Theaters{" "}
										</a>
									</li>
									<li>
										<a href="http://video-blog.thimpress.com/blog/archives/category/video/latest-videos/opening-this-week">
											Opening This Week{" "}
										</a>
									</li>
									<li>
										<a href="http://video-blog.thimpress.com/blog/archives/category/video/latest-videos/top-box-office">
											Top Box Office{" "}
										</a>
									</li>
									<li>
										<a href="http://video-blog.thimpress.com/blog/archives/category/video/latest-videos/weekend-earnings">
											Weekend Earnings{" "}
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="grid-items">
							<Card5 />
							{[...Array(6)].map(item => (
								<Card4 />
							))}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

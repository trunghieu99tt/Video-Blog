import React, { Component } from "react";
import Card8 from "../components/Cards/card-8";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="wrap-content">
						<div className="row justify-content-between">
							<div className="col-lg-4 footer-info">
								<figure>
									<img
										width="164"
										height="47"
										src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/logo-vivi-footer.png"
										className="footer-logo"
										alt=""
									></img>
								</figure>

								<div className="description">
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Provident error
										aliquam recusandae quam quos
										consequuntur dolorem cum sit laboriosam
										quia. Temporibus voluptate tenetur vero
										voluptatum possimus minus aperiam?
										Ipsum, facilis.
									</p>
								</div>

								<div className="footer-form">
									<form
										id="footer-1"
										class="yikes-easy-mc-form yikes-easy-mc-form-1  layout-footer"
										method="POST"
										data-attr-form-id="1"
									>
										<label for="email" class="email-label">
											<input
												id="email"
												name="EMAIL"
												placeholder="Your Email *"
												className="footer-form__input"
												required="required"
												type="email"
												value=""
											></input>
										</label>

										<button
											type="submit"
											class="btn footer-form__btn"
										>
											{" "}
											<span>Subscribe</span>
										</button>
									</form>
								</div>

								<div className="footer-social">
									<div className="wrap-content-social-links">
										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i className="social-icon fab fa-facebook"></i>
										</a>

										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i class="fab fa-twitter"></i>
										</a>

										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i class="fab fa-google-plus-g"></i>
										</a>

										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i className="social-icon fab fa-pinterest"></i>
										</a>

										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i class="fab fa-instagram"></i>
										</a>

										<a
											target="_blank"
											href="#"
											className="social-item"
										>
											<i className="social-icon fab fa-youtube"></i>
										</a>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="wrap-content footer-latest-post">
									<h3 className="title">LATEST POSTS</h3>

									<div className="wrap-element">
										<div className="post-list">
											{[...Array(3)].map(() => (
												<Card8 />
											))}
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6">
								<div className="wrap-content">
									<div className="popular-categories">
										<h3 className="title">
											Popular Categories
										</h3>
										<ul class="list-categories">
											<li class="cat-item">
												<a href="http://video-blog.thimpress.com/blog/archives/category/video/featured-video">
													Featured Video
												</a>
												<span class="count">1</span>
											</li>
											<li class="cat-item">
												<a href="http://video-blog.thimpress.com/blog/archives/category/video/latest-videos">
													Latest Videos
												</a>
												<span class="count">10</span>
											</li>
											<li class="cat-item">
												<a href="http://video-blog.thimpress.com/blog/archives/category/video/outfits">
													Outfits
												</a>
												<span class="count">1</span>
											</li>
											<li class="cat-item">
												<a href="http://video-blog.thimpress.com/blog/archives/category/video/popular-videos">
													Popular Videos
												</a>
												<span class="count">5</span>
											</li>
											<li class="cat-item">
												<a href="http://video-blog.thimpress.com/blog/archives/category/video/trending-videos">
													Trending Videos
												</a>
												<span class="count">4</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

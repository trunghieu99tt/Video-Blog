import React from "react";
import Card1 from "../Cards/card-1";

const Introduction = props => {
	return (
		<section
			className="introduction"
			style={{
				background: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                ),url(${require("../../images/bg-01.jpg")})`
			}}
		>
			<div className="container">
				<div className="wrap-content-introduction">
					<div className="introduction-video">
						<div className="row align-items-center">
							<div className="col-md-9">
								<div className="video">
									<div className="thumbnail">
										<img
											src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/pexels-photo-290492-h1-870x417.jpeg"
											alt="#1 WordPress Theme for Video Blog"
											className=""
										></img>
									</div>

									<a
										href="http://video-blog.thimpress.com/blog/archives/256"
										className="overlay"
									></a>

									<div className="meta-info">
										<div className="imdb">
											<span
												className="value"
												style={{
													background: `url(${require("../../images/star.png")})`
												}}
											>
												5
											</span>
											IMDb{" "}
										</div>
										<div className="labels">
											<div className="label">
												Popular{" "}
											</div>
										</div>
									</div>

									<div className="meta">
										<div className="item item-like">
											<i
												className="fa fa-thumbs-o-up"
												aria-hidden="true"
											></i>{" "}
											23k{" "}
										</div>
										<div className="item item-comment">
											<i
												className="fa fa-comments"
												aria-hidden="true"
											></i>{" "}
											13{" "}
										</div>
									</div>

									<span className="time-info">9:45 </span>

									<a
										href="#box-video-691"
										className="btn-play"
										data-id="256"
										data-effect="mfp-zoom-in"
										style={{
											background: `url(${require("../../images/icon-play-01.png")})`,
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											backgroundPosition: "center center"
										}}
									></a>
								</div>
							</div>
							<div class="col-lg-3">
								<div class="text">
									<h4 class="title">
										<a
											class="title"
											href="http://video-blog.thimpress.com/blog/archives/256"
										>
											#1 WordPress Theme for Video Blog{" "}
										</a>
									</h4>

									<div class="info">
										<span class="item-info">
											January 7, 2019
										</span>
										<span class="item-info">
											Featured Video
										</span>
									</div>

									<div class="description">
										VidTube is the best Video WordPress
										Theme with the most advanced features
										and funtionalities for…{" "}
									</div>

									<a
										href="http://video-blog.thimpress.com/blog/archives/256"
										class="btn-readmore btn-normal shape-round"
									>
										Read More{" "}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="introduction-items">
						<div className="wrap-introduction-items">
							<div className="row">
								{[...Array(4)].map(() => (
									<Card1 />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;

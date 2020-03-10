import React from "react";

const Card5 = props => {
	return (
		<div class="post-item card5">
			<a href="#">
				<img
					src="http://video-blog.thimpress.com/wp-content/uploads/2019/02/architecture-buildings-city-373893-460x605.jpg"
					alt="How to get more audience with your vlog"
					class=""
				></img>
			</a>

			<div class="card5__overlay"></div>

			<div class="card5__meta-info">
				<div class="imdb">
					<span
						class="value"
						style={{
							background: `url(${require("../../images/star.png")})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center"
						}}
					>
						9
					</span>
					IMDb{" "}
				</div>
				<div class="labels">
					<div class="label">Trend </div>
				</div>
			</div>

			<div class="card5__content">
				<div class="card5__meta">
					<div class="item item-like">
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 12k{" "}
					</div>
					<div class="item item-comment">
						<i class="fa fa-comments" aria-hidden="true"></i> 25{" "}
					</div>
				</div>
				<h4 class="card5__title">
					<a href="http://video-blog.thimpress.com/blog/archives/946">
						How to get more audience with your vlog{" "}
					</a>
				</h4>
				<div class="card5__info">
					<span class="item-info">by Thanos</span>
					<span class="item-info">February 28, 2019</span>
				</div>

				<div class="card5__description">
					VidTube. VidTube is a stylish video WordPress theme that can
					be used for a wide range of projects. Video Player. VidTube
					is a professional video blogging theme for WordPress that…{" "}
				</div>

				<a
					href="http://video-blog.thimpress.com/blog/archives/946"
					class="btn-readmore btn-normal shape-round"
				>
					Read More{" "}
				</a>
			</div>
		</div>
	);
};

export default Card5;

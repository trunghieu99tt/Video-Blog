import React from "react";

const Card2 = () => {
	return (
		<div class="post-item card2">
			<div class="card2__pic">
				<a href="#" tabindex="0">
					<img
						src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/affair-asad-asadphoto-1024967-270x390.jpg"
						alt="Top 15 Streamer WordPress Themes and Websites"
						class=""
					></img>
				</a>

				<div class="card2__overlay"></div>

				<div class="card2__meta-info">
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
							5
						</span>
						IMDb{" "}
					</div>

					<div class="labels">
						<div class="label">Popular </div>
					</div>
				</div>

				<div class="card2__meta">
					<div class="item item-like">
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 11k{" "}
					</div>
					<div class="item item-comment">
						<i class="fa fa-comments" aria-hidden="true"></i> 13{" "}
					</div>
				</div>

				<a
					href="/details"
					class="btn-play"
					data-id="774"
					tabindex="0"
					style={{
						background: `url(${require("../../images/icon-play-01.png")})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center"
					}}
				></a>
			</div>

			<h4 class="card2__title">
				<a href="/details" tabindex="0">
					Top 15 Streamer WordPress Themes and Websites{" "}
				</a>
			</h4>

			<div class="card2__info">Popular Videos </div>
		</div>
	);
};

export default Card2;

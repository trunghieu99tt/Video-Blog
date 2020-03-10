import React from "react";

const Card4 = props => {
	return (
		<div class="post-item card4">
			<a href="#">
				<img
					src="http://video-blog.thimpress.com/wp-content/uploads/2019/02/amazing-architecture-beautiful-1487674-223x296.jpg"
					alt="Vividly Bloggers opens up about life in Mexico"
					class=""
				></img>
			</a>

			<div class="card4__overlay"></div>

			<div class="card4__meta-info">
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
					<div class="label">Hot </div>
				</div>
			</div>

			<div class="card4__content">
				<div class="meta">
					<div class="item item-like">
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 12k{" "}
					</div>
				</div>
				<h4 class="card4__title">
					<a href="http://video-blog.thimpress.com/blog/archives/947">
						Vividly Bloggers opens up about life in Mexico{" "}
					</a>
				</h4>
			</div>
		</div>
	);
};

export default Card4;

import React from "react";

const Card1 = props => {
	return (
		<div class="col-sm-6 col-lg-3 ">
			<div class="card1-item">
				<div class="card1__pic">
					<a href="#">
						<img
							src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/pexels-photo-532987-h2-1-270x140.jpeg"
							alt="Cinematic Vimeo Videos"
							class=""
						></img>
					</a>

					<div class="card1__labels">
						<div class="label">Trend </div>
					</div>
				</div>

				<h4 class="card1__title">
					<a href="#">Cinematic Vimeo Videos </a>
				</h4>

				<div class="card1__info">January 16, 2019 </div>
			</div>
		</div>
	);
};

export default Card1;

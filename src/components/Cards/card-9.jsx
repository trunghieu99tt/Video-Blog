import React from "react";

// Card của phần giới thiệu các tính năng.

const Card9 = props => {
	return (
		<div className="card9">
			<div className="card9__icon">
				<img
					src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/icon-box-01-1.png"
					alt="icon"
				/>
			</div>

			<div className="card9__content">
				<div className="card9__title">
					<h3>Film Production</h3>
				</div>

				<div className="card9__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Unde cupiditate eum voluptate dolore minima, beatae earum
					sequi qui similique eos ducimus in nihil ex impedit
					perspiciatis velit quod asperiores eaque!
				</div>
			</div>
		</div>
	);
};

export default Card9;

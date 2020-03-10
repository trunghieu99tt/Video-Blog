import React, { Component } from "react";
import Card2 from "../components/Cards/card-2";

export default class Videos extends Component {
	render() {
		return (
			<div className="main-content">
				<div className="page-title">
					<div
						className="main-top"
						style={{
							background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(http://video-blog.thimpress.com/wp-content/uploads/2019/01/bg-page-title-01.jpg)`,
							backgroundSize: "cover"
						}}
					>
						<div class="content container">
							<h1>Videos</h1>
							<div class="wrap-breadcrumb">
								<ul
									itemprop="breadcrumb"
									itemscope=""
									itemtype="http://schema.org/BreadcrumbList"
									id="breadcrumbs"
									class="breadcrumbs"
								>
									<li
										itemprop="itemListElement"
										itemscope=""
										itemtype="http://schema.org/ListItem"
									>
										<a
											itemprop="item"
											href="http://video-blog.thimpress.com"
											title="Home"
										>
											<span itemprop="name">Home</span>
										</a>
										<span class="breadcrum-icon">/</span>
									</li>
									<li
										itemprop="itemListElement"
										itemscope=""
										itemtype="http://schema.org/ListItem"
									>
										<span itemprop="name" title="Videos">
											{" "}
											Videos
										</span>
									</li>
								</ul>{" "}
							</div>
						</div>
					</div>
				</div>
				<div className="page-content container">
					<div class="wrap-filter-group">
						<form
							method="get"
							class="form_filter_mobile wrap-select2"
							action="http://video-blog.thimpress.com/list-videos"
						>
							<select
								name="cat_id"
								tabindex="-1"
								class="select2-hidden-accessible"
								aria-hidden="true"
							>
								<option value="">All</option>
								<option value="24">
									Coming Soon to Theaters
								</option>
								<option value="23">Latest Videos</option>
								<option value="29">Opening This Week</option>
								<option value="27">Top Box Office</option>
								<option value="28">Weekend Earnings</option>
								<option value="60">Popular Videos</option>
								<option value="59">Trending Videos</option>
								<option value="58">Featured Video</option>
								<option value="22">Outfits</option>
							</select>
							<span
								class="select2 select2-container select2-container--default"
								dir="ltr"
							>
								<span class="selection">
									<span
										class="select2-selection select2-selection--single"
										role="combobox"
										aria-haspopup="true"
										aria-expanded="false"
										tabindex="0"
										aria-labelledby="select2-cat_id-qp-container"
									>
										<span
											class="select2-selection__rendered"
											id="select2-cat_id-qp-container"
											title="All"
										>
											All
										</span>
										<span
											class="select2-selection__arrow"
											role="presentation"
										>
											<b role="presentation"></b>
										</span>
									</span>
								</span>
								<span
									class="dropdown-wrapper"
									aria-hidden="true"
								></span>
							</span>
							<span class="dropDownSelect2"></span>
						</form>
						<div class="filter-tope-group">
							<a
								class="item-tope active"
								href="http://video-blog.thimpress.com/list-videos"
							>
								All{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=24"
							>
								Coming Soon to Theaters{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=23"
							>
								Latest Videos{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=29"
							>
								Opening This Week{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=27"
							>
								Top Box Office{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=28"
							>
								Weekend Earnings{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=60"
							>
								Popular Videos{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=59"
							>
								Trending Videos{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=58"
							>
								Featured Video{" "}
							</a>
							<a
								class="item-tope "
								href="http://video-blog.thimpress.com/list-videos?cat_id=22"
							>
								Outfits{" "}
							</a>
						</div>
					</div>
					<div className="videos-gallery">
						{[...Array(18)].map(() => (
							<Card2 />
						))}
					</div>
				</div>
			</div>
		);
	}
}

import React, { Component } from "react";

export default class Header extends Component {
	render() {
		const dataMenu = [
			{
				id: 1,
				name: "home",
				url: "/"
			},
			{
				id: 2,
				name: "blog",
				url: "/blog",
				submenu: {
					parentId: 2,
					data: [
						{
							id: 1,
							name: "Movie Studio",
							url: "#"
						},
						{
							id: 2,
							name: "Movie Studio",
							url: "#"
						},
						{
							id: 3,
							name: "Movie Studio",
							url: "#"
						},
						{
							id: 4,
							name: "Movie Studio",
							url: "#"
						}
					]
				}
			},
			{
				id: 3,
				name: "videos",
				url: "/videos"
			},
			{
				id: 4,
				name: "profile",
				url: "/user"
			}
		];

		const menuLinks = dataMenu.map(item => {
			const { id, name, submenu, url } = item;

			console.log(submenu);

			return (
				<li className="menu-item" key={`menu-item-${id}`}>
					<a href={url} className="menu-item__link">
						{name}
					</a>

					{submenu ? (
						<ul className="sub-menu">
							{submenu &&
								submenu.data &&
								submenu.data.map(item => {
									const { id, name } = item;
									return (
										<li
											className="menu-item"
											key={`menu-subitem-${id}`}
										>
											<a
												href="#"
												className="menu-item__link"
											>
												{name}
											</a>
										</li>
									);
								})}
						</ul>
					) : null}
				</li>
			);
		});

		return (
			<header className="header sticky">
				<div className="header-container">
					<div className="top-header">
						<div className="container">
							<div className="wrap-content-header">
								<div className="header-logo">
									<a href="http://video-blog.thimpress.com/">
										<img
											src="http://video-blog.thimpress.com/wp-content/uploads/2019/02/logo-vivi.png"
											alt="Vividly"
										/>
									</a>
								</div>
								<div className="right-logo">
									<div className="wrap-content-searchbar">
										<form className="search-form">
											<input
												type="search"
												className="search-field"
												name="search"
												placeholder="Seach for a Movie..."
												autocomplete="off"
											></input>

											<button className="btn-search">
												<i className="fas fa-search"></i>
											</button>
										</form>
									</div>
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
						</div>
					</div>
					<div className="bottom-header">
						<div className="container">
							<div className="wrap-content-header">
								<div class="menu-mobile-effect navbar-toggle">
									{/* <div class="text-menu">Menu </div> */}
									<div class="icon-wrap">
										<i class="fas fa-bars"></i>
									</div>
								</div>

								<nav className="main-navigation">
									<ul className="menu-item-list">
										{menuLinks}
									</ul>
								</nav>

								<div className="menu-right">
									<div className="menu-right-1">
										<div className="wrap-content-upload">
											<a
												class="btn-submit-video"
												href="http://video-blog.thimpress.com/submit-video/"
											>
												<i class="fas fa-cloud-upload-alt"></i>
												SUBMIT VIDEO
											</a>
										</div>
									</div>

									<div className="menu-right-2">
										<div className="wrap-content-login">
											<div class="login-links">
												<a
													class="login"
													data-active=".box-login"
													data-effect="mfp-zoom-in"
													title="Login"
													href="#bp-popup-login"
												>
													Login
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

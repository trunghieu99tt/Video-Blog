import React, { Component } from "react";

import Card8 from "../components/Cards/card-8";

export default class Header extends Component {
	expandSubMenu = parentId => {
		const submenus = document.getElementsByClassName("sub-menu-mobile");

		Array.from(submenus).forEach(item => {
			if (item && item.getAttribute("parentid") == parentId) {
				if (item.classList.contains("uncollapsed"))
					item.classList.remove("uncollapsed");
				else item.classList.add("uncollapsed");
			} else {
				item.classList.remove("uncollapsed");
			}
		});
		// console.log(submenus, parentId, submenus.parentid);
	};

	openMenu = e => {
		const menuOverlay = document.querySelector(".menu-overlay");
		if (menuOverlay && menuOverlay.style)
			menuOverlay.style.display = "block";
		const menuItem = document.querySelector(".mobile-menu");
		if (menuItem && menuItem.classList) menuItem.classList.add("openmenu");
	};

	closeMenu = e => {
		const menuOverlay = document.querySelector(".menu-overlay");
		if (menuOverlay && menuOverlay.style)
			menuOverlay.style.display = "none";
		const menuItem = document.querySelector(".mobile-menu");
		if (menuItem && menuItem.classList)
			menuItem.classList.remove("openmenu");
	};

	componentDidMount() {
		const menuOverlay = document.querySelector(".menu-overlay");

		menuOverlay.addEventListener("click", () => {
			const menuItem = document.querySelector(".mobile-menu");
			if (menuItem && menuItem.classList)
				menuItem.classList.remove("openmenu");
			if (menuOverlay && menuOverlay.style)
				menuOverlay.style.display = "none";
		});
	}

	render() {
		const dataMenu = [
			{
				id: 1,
				name: "home",
				url: "/Video-Blog"
			},
			{
				id: 2,
				name: "details",
				url: "/Video-Blog/details",
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
				url: "/Video-Blog/videos"
			},
			{
				id: 4,
				name: "about us",
				url: "/Video-Blog/aboutus"
			}
		];

		const menuLinks = dataMenu.map(item => {
			const { id, name, submenu, url } = item;

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
		const menuLinks1 = dataMenu.map(item => {
			const { id, name, submenu, url } = item;

			const parentId = (submenu && submenu.parentId) || -1;

			return (
				<li className="menu-item" key={`menu-item-${id}`}>
					<a href={url} className="menu-item__link">
						{name}
					</a>

					{submenu ? (
						<i
							class="fa fa-angle-down"
							onClick={() => this.expandSubMenu(parentId)}
						></i>
					) : null}

					{submenu ? (
						<ul className="sub-menu-mobile" parentid={parentId}>
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
							<div className="wrap-content-header-1">
								<div
									class="menu-mobile-effect navbar-toggle"
									onClick={e => this.openMenu(e)}
								>
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

				<div className="menu-overlay"></div>

				<nav className="mobile-menu">
					<i
						class="fas fa-times"
						onClick={e => this.closeMenu(e)}
					></i>

					<div className="mobile-menu-links">
						<h3 className="title">Menu</h3>
						<div className="wrap-menu-links">
							<ul className="menu-item-list">{menuLinks1}</ul>
						</div>
					</div>

					<div className="mobile-menu-articles">
						<h3 className="title"> Latest Videos</h3>

						<div className="wrap-articles">
							{[...Array(3)].map(() => (
								<Card8 />
							))}
						</div>
					</div>
				</nav>
			</header>
		
		);
	}
}

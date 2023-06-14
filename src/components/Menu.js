import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = ({
	activeMenu,
	setActiveMenu,
	menuOpen,
	changeMenuOpen,
	setJobSubMenusVisible,
	jobSubMenusVisible,
}) => {
	const hideMenu = (page) => {
		changeMenuOpen();
		setActiveMenu(page);
		setJobSubMenusVisible(page === "jobs");
	};

	const menuOptions = [
		{
			link: "overview",
			icon: "home",
			name: "Overview",
			submenus: [],
		},
		{
			link: "whoweare",
			icon: "user",
			name: "Who We Are",
			submenus: [],
		},
		{
			link: "jobs",
			icon: "briefcase",
			name: "Jobs",
			submenus: [
				{
					link: "jobs/how-we-work",
					icon: "circle",
					name: "How We Work",
				},
				{
					link: "jobs/how-to-get-a-job",
					icon: "circle",
					name: "How To Get A Job",
				},
				{
					link: "jobs/apply-now",
					icon: "circle",
					name: "Apply Now",
				},
				{
					link: "jobs/benefits",
					icon: "circle",
					name: "Benefits",
				},
				{
					link: "jobs/why-spokane",
					icon: "circle",
					name: "Why Spokane?",
				},
				{
					link: "jobs/why-austin",
					icon: "circle",
					name: "Why Austin?",
				},
			],
		},
		{
			link: "contactus",
			icon: "phone-alt",
			name: "Contact Us",
			submenus: [],
		},
		{
			link: "blog",
			icon: "beer",
			name: "Blog",
			submenus: [],
		},
	];

	return (
		<div className={`menu ${menuOpen ? "show-mobile-nav" : ""}`}>
			<nav className="nav">
				<ul>
					{menuOptions.map((option, index) => {
						return (
							<li
								style={{
									backgroundColor: `${
										activeMenu === option.link ? "#003454" : ""
									}`,
								}}
							>
								<Link
									to={`/${option.link}`}
									onClick={() => hideMenu(option.link)}
								>
									<FontAwesomeIcon
										icon={option.icon}
										style={{
											fontSize: "21px",
											top: "3px",
											position: "relative",
											color: `${
												activeMenu === option.link ? "var(--orange)" : ""
											}`,
										}}
									/>
									<span
										className={activeMenu === option.link ? "active-menu" : ""}
									>
										{option.name}
										{/* Display jobs sub menus if Jobs is the active menu */}
										<ul
											style={{
												display: activeMenu === "jobs" ? "block" : "none",
											}}
										>
											{option.submenus.length > 0 &&
												option.submenus.map((menu) => {
													return (
														<li
															style={{
																backgroundColor: `${
																	activeMenu === menu.link ? "#003454" : ""
																}`,
															}}
														>
															<Link
																to={`/${menu.link}`}
																onClick={() => hideMenu(menu.link)}
															>
																<FontAwesomeIcon
																	icon={menu.icon}
																	style={{
																		fontSize: "10px",
																		top: "3px",
																		position: "relative",
																		color: `${
																			activeMenu === menu.link
																				? "var(--orange)"
																				: ""
																		}`,
																	}}
																/>
																<span
																	className={
																		activeMenu === option.link
																			? "active-menu"
																			: ""
																	}
																>
																	{menu.name}
																</span>
															</Link>
														</li>
													);
												})}
										</ul>
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;

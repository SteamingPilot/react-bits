import React from "react";
import './NavBar.css'

const NavBar = () => {
	const sections: { label: string; id: string }[] = [
		{ label: "Home", id: "home" },
		{ label: "Services", id: "services" },
		{ label: "Our Team", id: "team" },
		{ label: "Contact Us", id: "contact" },
	];

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<a className="navbar__brand" href="#home">
					React Bits
				</a>
				<ul className="navbar__links">
					{sections.map((section) => (
						<li key={section.id}>
							<a className="navbar__link" href={`#${section.id}`}>
								{section.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;

import React from "react";

const NavBar = () => {
	const sections: { label: string; id: string }[] = [
		{ label: "Home", id: "home" },
		{ label: "Services", id: "services" },
		{ label: "Our Team", id: "team" },
		{ label: "Contact Us", id: "contact" },
	];

	return (
		<nav className="navbar text-white bg-dark border-bottom">
			<div className="container d-flex align-items-center">
				<a className="navbar-brand fw-semibold text-white" href="#home">
					React Bits
				</a>
				<ul className="nav ms-auto">
					{sections.map((section) => (
						<li className="nav-item" key={section.id}>
							<a className="nav-link text-white" href={`#${section.id}`}>
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

import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import { Container } from "react-bootstrap";

const NavBar = () => {
	return (
		// <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
		//   <Container fluid>
		//     <Navbar.Brand href="#home" className="fw-bold">
		//       Paul Palok
		//     </Navbar.Brand>
		//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
		//     <Navbar.Collapse id="basic-navbar-nav">
		//       <Nav className="ms-auto">
		//         <Nav.Link href="#home" className="px-3">
		//           Home
		//         </Nav.Link>
		//         <Nav.Link href="#services" className="px-3">
		//           Services
		//         </Nav.Link>
		//         <Nav.Link href="#team" className="px-3">
		//           Our Team
		//         </Nav.Link>
		//         <Nav.Link href="#contact" className="px-3">
		//           Contact Us
		//         </Nav.Link>
		//       </Nav>
		//     </Navbar.Collapse>
		//   </Container>
		// </Navbar>

			<Container fluid className="d-flex justify-content-between align-items-center bg-dark text-white">
                <div className="p-1">
                    <h3>Paul Palok</h3>
                </div>

				<div className="d-flex gap-3 fs-6 fw-normal navbar-links">
					<a href="#home" className="nav-link px-2">Home</a>
					<a href="#services" className="nav-link px-2">Service</a>
					<a href="#team" className="nav-link px-2">Our Team</a>
					<a href="#contact" className="nav-link px-2">Contact Us</a>
				</div>
            </Container>
	);
};

export default NavBar;

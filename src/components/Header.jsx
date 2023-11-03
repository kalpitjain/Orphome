import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "./images/logo.png";

const navigationLinks = [
  { to: "about", label: "About Us" },
  { to: "testimonials", label: "Testimonials" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact Us" },
];

function Header() {
  const [isTransparent, setTransparent] = useState(true);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleScroll = () => {
    setTransparent(window.scrollY <= 40);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div>
      <Navbar
        expand="lg"
        className={isTransparent ? "bg-transparent" : "bg-light"}
        fixed="top"
      >
        <Navbar.Brand>
          <Link className="brand-icon" to="title" smooth={true} duration={500}>
            <img
              src={Logo}
              alt="Orphome"
              width="50"
              height="50"
              className="d-inline-block align-top nav-links"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className="nav-links"
                style={{ color: isTransparent ? "#fff" : "#000" }}
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={Logo}
              alt="Orphome"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={handleClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import '../Styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [user] = useState({ profile_image: '' });

  return (
    <header className="sticky-navbar">
      <Navbar expand="lg" className="custom-navbar" bg="dark" variant="dark" sticky="top" collapseOnSelect>
        <Container>
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/home">
            <img src="./Images/logo1.png" alt="logo" width="130px" />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/movies">MOVIES</Nav.Link>
              <Nav.Link as={NavLink} to="/tvshows">TV SHOWS</Nav.Link>
              <Nav.Link as={NavLink} to="/popular">NEW & POPULAR</Nav.Link>

              <NavDropdown
                title={
                  <img
                    src={user.profile_image || "./Images/digit.png"}
                    alt="Profile"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  />
                }
                id="profile-dropdown"
                align="end"
                className="custom-dropdown"
                drop="down"
                renderMenuOnMount={true}
              >
                {/* Username only — not clickable */}
                <NavDropdown.ItemText>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    DIGIT IT
                  </span>
                </NavDropdown.ItemText>

                <NavDropdown.Divider style={{ borderColor: "white" }} />

                {/* Account navigates to profile */}
                <NavDropdown.Item onClick={() => navigate("/profile")} style={{ color: "white" }}>
                  Account
                </NavDropdown.Item>

                {/* Signout */}
                <NavDropdown.Item
                  onClick={() => {
                    console.log("Sign out clicked");
                    navigate("/login"); // or your logout logic
                  }}
                  style={{ color: "white" }}
                >
                  <FaSignOutAlt style={{ marginRight: "8px" }} />
                  Sign out from Starflix
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

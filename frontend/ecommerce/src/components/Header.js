import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <style>
        {`
            .custom-search {
                backgroundColor: "white",
                color: "black",
            }
            .custom-search::placeholder {
                color: #555555; /* dark grey */
            }
        `}
      </style>
      <Navbar
        className="navbar navbar-expand-lg bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">Pasal</Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link">Home</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/about">
                  <Nav.Link className="navbar-link">About</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/shop">
                  <Nav.Link className="navbar-link">Shop</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item dropdown">
                <LinkContainer to="/signup">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    New User?
                  </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu">
                  <LinkContainer to="/signin">
                    <Nav.Link className="dropdown-item">Sign in</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link className="dropdown-item">Sign up</Nav.Link>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control bg-white me-sm-2 custom-search"
                type="search"
                placeholder="Search"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              />
              <button
                className="btn btn-secondary my-2 my-sm-0 me-sm-3"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="d-flex navbar-nav">
              <li className="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i class="fa-solid fa-cart-arrow-down"></i>
                  </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;

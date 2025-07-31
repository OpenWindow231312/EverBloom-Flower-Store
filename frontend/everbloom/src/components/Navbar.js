import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import { ReactComponent as EverBloomLogo } from "../assets/EverBloomLogoLight.svg"; // <-- Updated Light Logo!
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <EverBloomLogo className="logo-icon" />
        {/* <span className="brand-text">EverBloom</span> */}
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/buy" className="nav-link">
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wishlist"
            className="nav-icon-link"
            aria-label="Wishlist"
          >
            <FaHeart />
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className="nav-icon-link" aria-label="Profile">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

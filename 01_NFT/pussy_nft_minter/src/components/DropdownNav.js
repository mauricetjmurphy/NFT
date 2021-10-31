import React from "react";
import "../styles/styles.css";
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";

function DropdownNav({ isOpen, toggleNav }) {
  return (
    <>
      <nav className={isOpen ? "dropdown-menu" : "dropdown-menu close"}>
        <ul className="navbar-nav">
          <Link
            onClick={toggleNav}
            className="nav-item"
            to="roadmap"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            ROADMAP
          </Link>
          <Link
            onClick={toggleNav}
            className="nav-item"
            to="rarity"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            RARITY
          </Link>
          <Link
            onClick={toggleNav}
            className="nav-item"
            to="dream"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            DREAM BIG
          </Link>
          <li onClick={toggleNav} className="nav-item connect">
            CONNECT
          </li>
          <li className="nav-item">
            <SocialMedia />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DropdownNav;

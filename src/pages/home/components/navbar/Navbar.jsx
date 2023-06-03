import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#contact">Contact</a>
      </p>
      <p>
        <a href="#contact">Sign In</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="jinz__navbar section_padding">
      <div className="jinz__navbar-brand">
        <h1>JinzAI</h1>
      </div>
      <div className="jinz__navbar-links">
        <Menu />
        <a className="try-button" href="/chat">
          Try JinzAI
        </a>
      </div>
      <div className="jinz__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fafafa"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fafafa"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}

        {toggleMenu && (
          <div className="jinz__navbar-menu__container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

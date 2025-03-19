import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="#residences">Residences</a>
          <a href="#value">Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

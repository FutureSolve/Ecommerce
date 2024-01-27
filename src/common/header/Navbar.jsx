import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
    <header className='header'>
      <div className="container d_flex">
        <div className="categories d_flex" onClick={toggleDropdown}>
          <h4>
          <span className="fa-solid fa-border-all"></span>
            Categories
            <i className={`fa ${showDropdown ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </h4>
        </div>
        {showDropdown && (
          <div  style={{ backgroundColor: "lightgray", padding: "10px", marginTop: "5px" }}>
          {/* Replace with your actual categories or dynamically generated content */}
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </div>
        )}

        <div className="navlink">
          <ul className={mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={closeMobileMenu}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
              <Link to="/Profile">user Profile</Link>
            </li>
            <li>
              <Link to="/track">track my order</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;

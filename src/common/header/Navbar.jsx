import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

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
      <header className="header">
        <div className="container d_flex">
          <div style={{ margin: "auto 0" }}>
            <Link
              to="/"
              //             style={{maxWidth:20, textDecoration: 'none' }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block", color: "#0f3460" } }}
              >
                Hambaka
              </Typography>
            </Link>
          </div>

          <div className="navlink">
            <ul className={"link f_flex capitalize"}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/Categories">Categories</Link>
              </li>
              <li>
                <Link to="/Profile">user Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

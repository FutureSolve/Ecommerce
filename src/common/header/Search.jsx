import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link,useHistory } from "react-router-dom";

const Search = ({ CartItem }) => {
  const history = useHistory();
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const handleLinkClick = () => {
    // Check if the user is logged in
    const storedToken = localStorage.getItem('authToken');
    const isLoggedIn = !!storedToken; // Convert to boolean

    if (!isLoggedIn) {
      // If not logged in, redirect to /SignIn
      history.push('/SignIn');
    } else {
      // If logged in, redirect to /profile
      history.push('/Profile');
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <h1>Hambka</h1>
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
          <Link to="#" onClick={handleLinkClick}>
        <i className="fa fa-user icon-circle"></i>
      </Link>

            
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

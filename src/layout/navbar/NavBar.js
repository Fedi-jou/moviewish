import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export const NavBar = () => {
  return (
    <div>
      <div className="header">
        <div className="inner-content">
          <div >
            <Link to="/" className="logo">
              Movies List
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              {/* <Link to="/wishlist" className="btn btn-main"> */}
              <Link to="/wishlist" className="logo">
                WishList
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

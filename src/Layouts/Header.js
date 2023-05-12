import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-bar">
        <Link to="/">
          <img
            className="header-img"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
            alt=""
          />
        </Link>
        <div className="header-title">Film</div>
      </div>
      <nav className="menu">
        <ul>
          <li className="menu-nav">
            <Link to="/movies">Films</Link>
          </li>
          <li className="menu-nav">
            <Link>TV Shows</Link>
          </li>
          <li className="menu-nav">
            <Link>Documentary</Link>
          </li>
          <li className="menu-nav">
            <Link>Kids</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

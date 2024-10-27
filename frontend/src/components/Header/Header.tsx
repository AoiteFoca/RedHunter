import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>RedHunter</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search">
        <input type="text" placeholder="O que você procura?" />
        <span className="material-symbols-outlined">search</span>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
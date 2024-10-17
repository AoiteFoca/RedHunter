import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teste">Teste</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
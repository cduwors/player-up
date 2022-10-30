import React from 'react';
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
import logo from "../images/player-up-logo.png"

const Header = () => {
  // logout
  const logout = (event) => {
    event.preventDefault();
    // Auth.logout();
  };

  return (
    <header className="header">
      <div className="">
        <Link to="/">
          <span><img src={logo}></img></span>
        </Link>

        <nav className="text-center">
          {/* {Auth.loggedIn() ? ( */}
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          {/* ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;


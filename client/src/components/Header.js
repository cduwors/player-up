import React from "react";
import logo from "../images/player-up-logo.png";
// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

const Header = () => {
  // logout
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  return (
    <header>
      <div className="header">
        {/* <Link to="/"> */}
          <div className="logo-header">
            <img className="logo" src={logo} alt="player-up-logo"></img>
          </div>
        {/* </Link> */}

        <nav className="nav-home">
          {/* {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
          <>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

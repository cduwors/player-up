import React, { useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = ({
  pageSelected,
  setPageSelected,
  currentPage,
  setCurrentPage,
}) => {
 
  // update document.title to match category selection
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <> {Auth.loggedIn() ?
    (<header>
      {currentPage !== "Home" ? (
        <div className="header">
          <a href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <nav>
            <ul className="nav-header">
              <li
                className={`nav-link ${
                  currentPage === "Profile" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Profile");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/profile"}>Profile</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage === "Events" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Events");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/events"}>Events</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage === "Logout" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Logout");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/"} onClick={() => Auth.logout()}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header">
          <a className="hide" href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <div className="nav-home">
            <nav>
              <ul className="nav-header">
                <li
                  className={`nav-link-home ${
                    currentPage === "Profile" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Profile");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/profile"} className="link-text">Profile</Link>
                </li>
                <li
                  className={`nav-link-home ${
                    currentPage === "Events" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Events");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/events"} className="link-text">Events</Link>
                </li>
                <li
                  className={`nav-link-home ${
                    currentPage === "Logout" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Logout");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/"} onClick={() => Auth.logout()} className="link-text">Logout</Link>
                </li>
                </ul>
            </nav>
          </div>
        </div>
      )}
    </header>) : (<header>
      {currentPage !== "Home" ? (
        <div className="header">
          <a href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <nav>
            <ul className="nav-header">
              <li
                className={`nav-link ${
                  currentPage === "Events" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Events");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/events"}>Events</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage === "Login" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Login");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/login"}>Login</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage === "Signup" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Signup");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none'}} to={"/signup"}>Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header">
          <a className="hide" href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <div className="nav-home">
            <nav>
              <ul className="nav-header">
                <li
                  className={`nav-link-home ${
                    currentPage === "Events" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Events");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/events"} className="link-text">Events</Link>
                </li>
                <li
                  className={`nav-link-home ${
                    currentPage === "Login" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Login");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/login"} className="link-text">Login</Link>
                </li>
                <li
                  className={`nav-link-home ${
                    currentPage === "Signup" &&
                    pageSelected &&
                    "navActive"
                  }`}
                  onClick={() => {
                    setCurrentPage("Signup");
                    setPageSelected(true);
                  }}
                >
                  <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/signup"} className="link-text">Signup</Link>
                </li>
                </ul>
            </nav>
          </div>
        </div>
      )}
    </header>)
}</>
  );
};

export default Header;

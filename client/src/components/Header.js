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
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <> {Auth.loggedIn() ?
    (<header>
      {currentPage.name !== "Home" ? (
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
                  currentPage.name === "Profile" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Profile");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/profile"}>Profile</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage.name === "Events" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Events");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/events"}>Events</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage.name === "Logout" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Logout");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/"} onClick={() => Auth.logout()}>Logout</Link>
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
                    currentPage.name === "Profile" &&
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
                    currentPage.name === "Events" &&
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
                    currentPage.name === "Logout" &&
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
      {currentPage.name !== "Home" ? (
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
                  currentPage.name === "Events" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Events");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/events"}>Events</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage.name === "Login" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Login");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/login"}>Login</Link>
              </li>
              <li
                className={`nav-link ${
                  currentPage.name === "Signup" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Signup");
                  setPageSelected(true);
                }}
              >
                <Link style={{textDecoration: 'none', color: '#ffff', marginTop: '15px'}} to={"/signup"}>Signup</Link>
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
                    currentPage.name === "Events" &&
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
                    currentPage.name === "Login" &&
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
                    currentPage.name === "Signup" &&
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

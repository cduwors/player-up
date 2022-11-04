import React, { useState, useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {
  // page selection state
  const [pageSelected, setPageSelected] = useState(false);
  const [homePage, setHomePage] = useState(true);

  // update document.title to match category selection
  useEffect(() => {
    document.title = "PlayerUP"});

  const displayNav = () => {
      return (
      <div className="header">
        <a href="/" onClick={() => setHomePage("Home")}>
          <div className="logo-header">
            <img className="logo" src={logo} alt="player-up-logo"></img>
          </div>
        </a>
        <nav>
          <ul className="nav-header">
            <li
              className={`nav-link ${pageSelected && "navActive"}`}
              onClick={() => {
                setHomePage(false);
                setPageSelected(true);
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/profile"}>
                Profile
              </Link>
            </li>
            <li
              className={`nav-link ${pageSelected && "navActive"}`}
              onClick={() => {
                setHomePage(false);
                setPageSelected(true);
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/events"}>
                Events
              </Link>
            </li>
            <li
              className={`nav-link ${pageSelected && "navActive"}`}
              onClick={() => {
                setHomePage(false);
                setPageSelected(true);
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={"/"}
                onClick={() => Auth.logout()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )}

const displayNavHome = () => {
return (
<div className="header">
              <a className="hide" href="/" onClick={() => setHomePage("Home")}>
                <div className="logo-header">
                  <img className="logo" src={logo} alt="player-up-logo"></img>
                </div>
              </a>
              <div className="nav-home">
                <nav>
                  <ul className="nav-header">
                    <li
                      className={`nav-link-home ${pageSelected && "navActive"}`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/profile"}
                        className="link-text"
                      >
                        Profile
                      </Link>
                    </li>
                    <li
                      className={`nav-link-home ${pageSelected && "navActive"}`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/events"}
                        className="link-text"
                      >
                        Events
                      </Link>
                    </li>
                    <li
                      className={`nav-link-home ${pageSelected && "navActive"}`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/"}
                        onClick={() => Auth.logout()}
                        className="link-text"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

  return (
    <>
      {Auth.loggedIn() ? (
        <header>
          {homePage ? displayNavHome() : displayNav()}
        </header>
      ) : (
        <header>
          {!homePage ? (
            <div className="header">
              <a href="/" onClick={() => setHomePage("Home")}>
                <div className="logo-header">
                  <img className="logo" src={logo} alt="player-up-logo"></img>
                </div>
              </a>
              <nav>
                <ul className="nav-header">
                  <li
                    className={`nav-link ${pageSelected && "navActive"}`}
                    onClick={() => {
                      setHomePage(false);
                      setPageSelected(true);
                    }}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/events"}>
                      Events
                    </Link>
                  </li>
                  <li
                    className={`nav-link ${pageSelected && "navActive"}`}
                    onClick={() => {
                      setHomePage(false);
                      setPageSelected(true);
                    }}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li
                    className={`nav-link ${
                      pageSelected && "navActive"
                    }`}
                    onClick={() => {
                      setHomePage(false);
                      setPageSelected(true);
                    }}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/signup"}>
                      Signup
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="header">
              <a className="hide" href="/" onClick={() => setHomePage("Home")}>
                <div className="logo-header">
                  <img className="logo" src={logo} alt="player-up-logo"></img>
                </div>
              </a>
              <div className="nav-home">
                <nav>
                  <ul className="nav-header">
                    <li
                      className={`nav-link-home ${
                        pageSelected && "navActive"
                      }`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/events"}
                        className="link-text"
                      >
                        Events
                      </Link>
                    </li>
                    <li
                      className={`nav-link-home ${
                        pageSelected && "navActive"
                      }`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/login"}
                        className="link-text"
                      >
                        Login
                      </Link>
                    </li>
                    <li
                      className={`nav-link-home ${
                        pageSelected && "navActive"
                      }`}
                      onClick={() => {
                        setHomePage(false);
                        setPageSelected(true);
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#ffff",
                          marginTop: "15px",
                        }}
                        to={"/signup"}
                        className="link-text"
                      >
                        Signup
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Header;

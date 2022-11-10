import React, {useState} from "react";
import logo from "../images/player-up-logo.png";
import { Link, useLocation } from "react-router-dom";
// import Auth from "../utils/auth";

const NavLoggedOut = ({titleLocation}) => {
     // page selection state
  const [pageSelected, setPageSelected] = useState(false);
  const [homePage, setHomePage] = useState(true); 
  const location = useLocation()

  const clickState = () => {
    setHomePage(false);
    setPageSelected(true);
  }

  if (location.pathname !== "/") {
    if(homePage) {
    setHomePage(false)}
  } 

  return (
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
                className={`nav-link ${pageSelected && titleLocation === "events" && "navActive"}`}
                onClick={clickState}
              >
                <Link style={{ textDecoration: "none" }} to={"/events"}>
                  Events
                </Link>
              </li>
              <li
                className={`nav-link ${pageSelected && titleLocation === "login" && "navActive"}`}
                onClick={clickState}
              >
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  Login
                </Link>
              </li>
              <li
                className={`nav-link ${pageSelected && titleLocation === "signup" && "navActive"}`}
                onClick={clickState}
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
                  className={`nav-link-home ${pageSelected && "navActive"}`}
                  onClick={clickState}
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
                  onClick={clickState}
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
                  className={`nav-link-home ${pageSelected && "navActive"}`}
                  onClick={clickState}
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
  );
};

export default NavLoggedOut;

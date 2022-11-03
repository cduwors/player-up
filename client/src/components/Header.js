import React, { useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = ({
  pages,
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
<<<<<<< HEAD
              <li
                className={`nav-link ${
                  currentPage.name === "Profile" && pageSelected && "navActive"
                }`}
                onClick={() => {
                  setCurrentPage("Profile");
                  setPageSelected(true);
                }}
              >
                <Link to={"/profile"}>Profile</Link>
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
                <Link to={"/events"}>Events</Link>
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
                <Link to={"/"} onClick={() => Auth.logout()}>Logout</Link>
              </li>
=======
              {navList.map((page) => (
                <li
                  className={`nav-link ${
                    currentPage.name === page.name &&
                    pageSelected &&
                    "navActive"
                  }`}
                  key={page.name}
                >
                  <span
                    onClick={() => {
                      setCurrentPage(page);
                      setPageSelected(true);
                    }}
                  >
                    <Link style={{ textDecoration: 'none' }} to={page.path}>{capitalizeFirstLetter(page.name)}</Link>
                  </span>
                </li>
              ))}
>>>>>>> 637082008e15f25431f2faca3a2e2d813c377c47
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header-home">
          <a className="hide" href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <div className="nav-home">
            <nav>
              <ul className="nav-header-home">
<<<<<<< HEAD
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
                  <Link to={"/profile"}>Profile</Link>
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
                  <Link to={"/events"}>Events</Link>
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
                  <Link to={"/"} onClick={() => Auth.logout()}>Logout</Link>
                </li>
                </ul>
=======
                {homeNavList.map((page) => (
                  <li
                    className={`nav-link-home ${
                      currentPage.name === page.name &&
                      pageSelected &&
                      "navActive"
                    }`}
                    key={page.name}
                  >
                    <span
                      onClick={() => {
                        setCurrentPage(page);
                        setPageSelected(true);
                      }}
                    >
                      <Link style={{ textDecoration: 'none' }} to={page.path}>{capitalizeFirstLetter(page.name)}</Link>
                    </span>
                  </li>
                ))}
              </ul>
>>>>>>> 637082008e15f25431f2faca3a2e2d813c377c47
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
                <Link to={"/events"}>Events</Link>
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
                <Link to={"/login"}>Login</Link>
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
                <Link to={"/signup"}>Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header-home">
          <a className="hide" href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <div className="nav-home">
            <nav>
              <ul className="nav-header-home">
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
                  <Link to={"/events"}>Events</Link>
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
                  <Link to={"/login"}>Login</Link>
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
                  <Link to={"/signup"}>Signup</Link>
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

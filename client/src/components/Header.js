import React, { useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { capitalizeFirstLetter } from "../utils/helpers";
// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

const Header = (props) => {
  const { pages, pageSelected, setPageSelected, currentPage, setCurrentPage } =
    props;
  // logout
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  // update document.title to match category selection
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  // const navList = pages.filer(page => {
  //   if(page.name !== "SingleEvent") return page.name
  // })
  // console.log(navList)

  return (
    <header>
      
        {/* <Link to="/"> */}
        {currentPage.name !== "Home" ? (
          <div className="header">
          <a href="/" onClick={() => setCurrentPage("Home")}>
            <div className="logo-header">
              <img className="logo" src={logo} alt="player-up-logo"></img>
            </div>
          </a>
          <nav>
          <ul className="nav-header">
            {pages.map((page) => (
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
                  {capitalizeFirstLetter(page.name)}
                </span>
              </li>
            ))}
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
                {pages.map((page) => (
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
                      {capitalizeFirstLetter(page.name)}
                    </span>
                  </li>
                ))}
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
              </ul>
            </nav>
          </div>
      </div>
        )}
    </header>
  );
};

export default Header;

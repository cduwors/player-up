import React, { useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { capitalizeFirstLetter } from "../utils/helpers";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = ({ pages, pageSelected, setPageSelected, currentPage, setCurrentPage }) => {
  // logout
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // update document.title to match category selection
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  const homeNavList = pages.filter(page => {
    if(page.name !== "SingleEvent" && page.name !=="Home") return page.name
  })
  const navList = pages.filter(page => {
    if(page.name !== "SingleEvent" && page.name !=="Home") return page.name
  })
  console.log(navList)

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
                    <Link to={page.path}>{capitalizeFirstLetter(page.name)}</Link>
                  </span>
                </li>
              ))}
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
                      <Link to={page.path}>{capitalizeFirstLetter(page.name)}</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

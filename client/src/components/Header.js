import React, { useEffect } from "react";
// import logo from "../images/player-up-logo.png";
import { useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";

const Header = () => {

  // update document.title to match category 
  const location = useLocation();
  const titleLocation = location.pathname.split("/")[1]
  const param = location.pathname.split("/")[2]
  useEffect(() => {
    document.title = titleLocation 
    if (titleLocation !== "profile" && titleLocation !== "events" && titleLocation !== "login" && titleLocation !== "signup") {
      document.title = "PlayerUP"
    } 
  }, [titleLocation]);

  return (
    <>
      {Auth.loggedIn() ? (
        <NavLoggedIn titleLocation={titleLocation} param={param}></NavLoggedIn>
      ) : (
        <NavLoggedOut titleLocation={titleLocation} param={param}></NavLoggedOut>
      )}
    </>
  );
};

export default Header;

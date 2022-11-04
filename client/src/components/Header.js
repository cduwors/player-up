import React, { useState, useEffect } from "react";
// import logo from "../images/player-up-logo.png";
import { useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";

const Header = () => {

  // update document.title to match category 
  const location = useLocation();
  const titleLocation = location.pathname.split("/")[1]
  useEffect(() => {
    document.title = titleLocation 
    if (titleLocation !== "profile" && titleLocation !== "events" && titleLocation !== "login" && titleLocation !== "signup") {
      document.title = "PlayerUP"
    } 
  }, [location]);

  return (
    <>
      {Auth.loggedIn() ? (
        <NavLoggedIn></NavLoggedIn>
      ) : (
        <NavLoggedOut></NavLoggedOut>
      )}
    </>
  );
};

export default Header;

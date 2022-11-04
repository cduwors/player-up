import React, { useState, useEffect } from "react";
import logo from "../images/player-up-logo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import NavLoggedIn from "./NavLoggedIn";
import NavLoggedOut from "./NavLoggedOut";

const Header = () => {
  // update document.title to match category selection
  useEffect(() => {
    document.title = "PlayerUP";
  });

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

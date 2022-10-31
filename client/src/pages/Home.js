import React from "react";
import logo from "../images/player-up-logo.png";

const Home = () => {
  return (
    <section>
      <div>
        <div>Home Page</div>
        <div className="logo-home"><img className="logo" src={logo} alt="player-up-logo"></img></div>
        
      </div>
    </section>
  );
};

export default Home;

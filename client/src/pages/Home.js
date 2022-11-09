import React from "react";
import logo from "../images/player-up-logo.png";
// import home from "../images/board-games.jpg";

const Home = () => {
	console.log("inhome");
	return (
		<section className="home-background">
			<div className="background-cork">
				<div className="logo-home">
					<img className="logo" src={logo} alt="player-up-logo"></img>
				</div>
			</div>
      <div>
				<p>Welcome to the page!</p>
			</div>
		</section>
	);
};

export default Home;

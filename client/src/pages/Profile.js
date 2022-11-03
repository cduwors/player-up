import React, { useState } from "react";
import EventList from "../components/EventList";
import AddEvent from "./AddEvent";
import { Link } from "react-router-dom";

const Profile = () => {
	const events = [
		{
			_id: 1,
			eventName: "Capture the Flag",
			description:
				"Two teams each have their own flag placed in their “home base.” Objective is to steal the other team's flag and take it home. Players can tag or capture opposing players if they enter enemy territory.",
			dateAndTime: "2pm Sunday, June 12th, 2022",
			location: "Jenks Carpenter Rd, Cary, NC 27519",
			numberPlayersNeeded: "10+",
			organizerNames: "James Douglas",
		},
		{
			_id: 2,
			eventName: "Apples to Apples",
			description:
				"The game of hilarious comparisons with a roll of the dice. Judge awards a chip to the noun he or she deems the best comparison.",
			dateAndTime: "2pm Sunday, June 12th, 2022",
			location: "Jenks Carpenter Rd, Cary, NC 27519",
			numberPlayersNeeded: "4-10",
			organizerNames: "James Douglas",
		},
	];
	const commitments = [
		{
			_id: 4,
			eventName: "Clue",
			description:
				"players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
			dateAndTime: "7pm Friday, July 22th, 2022",
			location: "506 Rowan Way, Apex NC",
			numberPlayersNeeded: "2-6",
			organizerNames: "Chelsea Montreal",
		},
	];

	const [commitmentList, setCommitmentList] = useState(false);
	const [addEventPage, setAddEventPage] = useState(false);

	const displayCommitments = () => {
		// document.querySelector("#event-list").textContent("")
		setCommitmentList(true);
	};
	const displayEvents = () => {
		setCommitmentList(false);
	};

	return (
		<section className="cork-board">
			<div className="profile-background">
				<h1 className="event-header">James Douglas</h1>
				<div className="button-box">
					<button
						onClick={displayEvents}
						className={`list-btn ${!commitmentList && "list-button"}`}>
						My Events
					</button>

          <Link to="/addEvent">
          <button onClick={ () => setAddEventPage(true)} className={`list-btn`}>Post a Game</button>
					</Link>

					<button
						onClick={displayCommitments}
						className={`list-btn ${commitmentList && "list-button"}`}>
						My Game Plan
					</button>
				</div>
			</div>
			{!addEventPage ? (
				<>
					{commitmentList ? (
						<EventList events={commitments}></EventList>
					) : (
						<EventList events={events}></EventList>
					)}
				</>
			) : (
				<AddEvent
					addEventPage={addEventPage}
					setAddEventPage={setAddEventPage}></AddEvent>
			)}
		</section>
	);
};

export default Profile;

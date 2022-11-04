import React, { useState } from "react";
import EventList from "../components/EventList";
import AddEvent from "./AddEvent";
// import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_EVENTS } from "../utils/queries";
import { QUERY_USER_EVENTS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";

const Profile = () => {
	const { data } = useQuery(QUERY_ME);
	
	const me = data?.me || {}
	console.log(me);
	const { loading, eventData } = useQuery(QUERY_USER_EVENTS, {
		variables: { organizerName: me.username },
	});
	const events = eventData || [];
	console.log(events)

	
	// const events = [
	// 	{
	// 		_id: 1,
	// 		eventName: "Capture the Flag",
	// 		description:
	// 			"Two teams each have their own flag placed in their “home base.” Objective is to steal the other team's flag and take it home. Players can tag or capture opposing players if they enter enemy territory.",
	// 		dateAndTime: "2pm Sunday, June 12th, 2022",
	// 		location: "Jenks Carpenter Rd, Cary, NC 27519",
	// 		numberPlayersNeeded: "10+",
	// 		organizerNames: "James Douglas",
	// 		attending: []
	// 	},
	// 	{
	// 		_id: 2,
	// 		eventName: "Apples to Apples",
	// 		description:
	// 			"The game of hilarious comparisons with a roll of the dice. Judge awards a chip to the noun he or she deems the best comparison.",
	// 		dateAndTime: "2pm Sunday, June 12th, 2022",
	// 		location: "Jenks Carpenter Rd, Cary, NC 27519",
	// 		numberPlayersNeeded: "4-10",
	// 		organizerNames: "James Douglas",
	// 		attending: []
	// 	},
	// ];
	// const commitments = [
	// 	{
	// 		_id: 4,
	// 		eventName: "Clue",
	// 		description:
	// 			"players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
	// 		dateAndTime: "7pm Friday, July 22th, 2022",
	// 		location: "506 Rowan Way, Apex NC",
	// 		numberPlayersNeeded: "2-6",
	// 		organizerNames: "Chelsea Montreal",
	// 	},
	// ];

	const [commitmentList, setCommitmentList] = useState(false);
	const [addEventPage, setAddEventPage] = useState(false);


	const displayCommitments = () => {
		document.querySelector(".selectEvents").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		document.querySelector(".selectCommitments").style.backgroundColor = 'GREENYELLOW';
		document.querySelector(".selectAdd").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		setCommitmentList(true);
		setAddEventPage(false)
	};
	const displayEvents = () => {
		document.querySelector(".selectEvents").style.backgroundColor = 'GREENYELLOW';
		document.querySelector(".selectCommitments").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		document.querySelector(".selectAdd").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		setCommitmentList(false);
		setAddEventPage(false)
	};

	const displayAddEvent = () => {
		document.querySelector(".selectAdd").style.backgroundColor = 'GREENYELLOW';
		document.querySelector(".selectCommitments").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		document.querySelector(".selectEvents").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		setAddEventPage(true)
	}

	return (
		<section className="cork-board">
			<div className="profile-background">
				<h1 className="event-header">{me.username}</h1>
				<div className="button-box">
					<button
						onClick={displayEvents}
						className="list-btn selectEvents">
						My Events
					</button>

          <button onClick={displayAddEvent} className="list-btn selectAdd">Post a Game</button>

					<button
						onClick={displayCommitments}
						className="list-btn selectCommitments">
						My Game Plan
					</button>
				</div>
			</div>
			{!addEventPage ? (
				<>
					{commitmentList ? (
						<EventList events={events}></EventList>
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

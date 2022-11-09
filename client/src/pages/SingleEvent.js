import React from "react";
import { useParams } from "react-router-dom";
import { pluralize, formatDate, formatTime } from "../utils/helpers";
import { Link } from "react-router-dom";

// import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_EVENTS, QUERY_ME } from "../utils/queries";
import { ADD_PLAYER } from "../utils/mutations";

const SingleEvent = () => {
	const { id: eventId } = useParams();
	const { loading, data } = useQuery(QUERY_SINGLE_EVENTS, {
		variables: { id: eventId },
	});
	const event = data?.event || {};
	// console.log(eventId);
	// console.log(data);
	const { myData } = useQuery(QUERY_ME);
	const me = myData?.me || {};

	const [addPlayer] = useMutation(ADD_PLAYER);
	const handleAddPlayer = async (id) => {
		try {
			await addPlayer({
				variables: { eventID: id },
			});
			// console.log(me)
			// console.log(events);
		} catch (e) {
			console.error(e);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<section className="single-event-background">
			<div>
				<div className="single-event-head-background">
        <p className="single-event-subtitle">Event Details for:</p>
					<h1 className="single-event-header">{event.eventName}</h1>
				</div>
			</div>
			<div>
				<div className="singleEvent">
					<span>
						<p>
							Date: {formatDate(event.date)} <br />
							Time: {formatTime(event.time)} <br />
							<a
								className="mapLink"
								href="https://www.google.com/maps/dir/?api=1"
								target="_blank"
								rel="noreferrer">
								Location: {event.location}
							</a>
						</p>
						<p>Description: {event.description}</p>
						<p>
							Organizer:
							<Link
								to={`/profile/${event.organizerName}`}
								className="profile-link">
								{` ${event.organizerName}`}
							</Link>
							<br></br>
							Players needed: {event.numberPlayersNeeded}
							<br />
							{`Players attending: `}
							{!event.attending
								? "0"
								: pluralize("player", event.attending.length)}
						</p>
					</span>
					{event.organizerName === me.username ? (
						<button className="add-player">Edit Game</button>
					) : (
						<button
							className="add-player"
							onClick={() => {
								handleAddPlayer(event._id);
							}}>
							I'm Game!
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default SingleEvent;

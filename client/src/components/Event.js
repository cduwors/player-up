import React from "react";
import { pluralize } from "../utils/helpers";
import {Link} from "react-router-dom";

function Event({ event }) {
	return (
		<article className="text-box">
			<h2 className="eventName">{event.eventName}</h2>
			<span>
				{event.time} | {event.date} <br />
				<a
					className="mapLink"
					href="https://www.google.com/maps/dir/?api=1"
					target="_blank"
          rel="noreferrer">
					{event.location}
				</a>
			</span>
			<p>Description: {event.description}</p>
			<span>
				<Link to={`/profile/${event.organizerName}`} className="profile-link">{event.organizerName}</Link> | Players needed: {event.numberPlayersNeeded}
				<br />
				Players attending: 
				{!event.attending ? "0" : pluralize("player", event.attending.length)}
			</span>
		</article>
	);
}

export default Event;

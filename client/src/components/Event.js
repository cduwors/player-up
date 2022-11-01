import React from "react";

function Event({ event }) {
  return (
    <article className="text-box">
      <h2 className="eventName">{event.eventName}</h2>
      <span>
        {event.dateAndTime} <br />
        {event.location}
      </span>
      <p>Description: {event.description}</p>
      <p>
        {event.organizerNames} | Players needed: {event.numberPlayersNeeded}
      </p>
    </article>
  );
}

export default Event;
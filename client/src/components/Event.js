import React from "react";
import { pluralize } from "../utils/helpers";

function Event({ event }) {

 

  return (
    <article className="text-box">
      <h2 className="eventName">{event.eventName}</h2>
      <span>
        {event.dateAndTime} <br />
        {event.location}
      </span>
      <p>Description: {event.description}</p>
      <span>
        {event.organizerNames} | Players needed: {event.numberPlayersNeeded} <br />
        Players attending: {!event.attending.length ? "0" : pluralize("player", event.attending.length)}
      </span>
    </article>
  );
}

export default Event;
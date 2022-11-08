import React from "react";
import { pluralize, formatDate, formatTime} from "../utils/helpers";

function Event({ event }) {
  
  return (
    <article className="text-box">
      <h2 className="eventName">{event.eventName}</h2>
      <span>
        {formatTime(event.time)} | {formatDate(event.date)} <br />
        {event.location}
      </span>
      {/* <p>Description: {event.description}</p> */}
      <span>
        {/* {event.organizerName} | Players needed: {event.numberPlayersNeeded} */}
        <br />
        Players attending:{" "}
        {!event.attending ? "0" : pluralize("player", event.attending.length)}
      </span>
    </article>
  );
}

export default Event;

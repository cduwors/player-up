import React from "react";
import SingleEvent from "../pages/SingleEvent";
import Event from "./Event";

function EventList({ events }) {
  return (
    <ul className="event-list">
      {events.map((eventObj) => (
        <li key={eventObj._id} className="card">
          <Event event={eventObj}></Event>
          {/* {event.organizerName === context.user.username ?  */}
          <button className="play-btn">I'm Game!</button>
          {/*  :  <button>Edit Game</button>} */}
          <SingleEvent props={eventObj} />
        </li>
      ))}
    </ul>
  );
}

export default EventList;

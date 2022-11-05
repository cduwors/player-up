import React from "react";
import SingleEvent from "../pages/SingleEvent";
import Event from "./Event";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

function EventList({ events }) {
  console.log(QUERY_ME);
  const { data } = useQuery(QUERY_ME);
  const me = data?.me;
  console.log("This is me", me);
  // need to change userName to me later
  const userName = me.username;

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
}

export default EventList;

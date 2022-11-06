import React from "react";
import Event from "./Event";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";

function EventList({ events }) {
  // console.log(QUERY_ME);
  const { data } = useQuery(QUERY_ME);
  const me = data?.me || {};
  console.log("This is me", me);
  // need to change userName to me later
  // const userName = me.username;

  return (
    <ul className="event-list">
      {events.map((eventObj) => (
        <li key={eventObj._id} className="card">
          <Link className="event-link" to={`/event/${eventObj._id}`}>
            <Event event={eventObj}></Event>
          </Link>
          {eventObj.organizerName === me.username ? (
            <button className="edit-btn">Edit Game</button>
          ) : (
            <button className="play-btn">I'm Game!</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EventList;

import React from "react";
import Event from "./Event";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_PLAYER } from "../utils/mutations";
// import { Link } from "react-router-dom";

function EventList({ events }) {
  // query me
  const { data } = useQuery(QUERY_ME);
  const me = data?.me || {};
  console.log("me", me);
// mutation addPlayer
  const [addPlayer] = useMutation(ADD_PLAYER);
  const handleAddPlayer = async (id) => { 
    try {
      await addPlayer({
        variables: { eventID: id, userId: me._id },
      });
      console.log(events)
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ul className="event-list">
      {events.map((eventObj) => (
        <li key={eventObj._id} className="card">
          <Event event={eventObj}></Event>
          {eventObj.organizerName === me.username ? (
            <link to={"./event/edit/{$eventObj._id}"}><button className="play-btn">Edit Game</button></link>
          ) : (
            <button className="play-btn" onClick={() => {handleAddPlayer(eventObj._id)}}>I'm Game!</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EventList;

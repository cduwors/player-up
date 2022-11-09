import React from "react";
import Event from "./Event";
import EditEvent from "../pages/EditEvent";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_PLAYER } from "../utils/mutations";
import { Link, useHistory } from "react-router-dom";

function EventList({ events }) {
  // query me
  const history = useHistory();
  const { data } = useQuery(QUERY_ME);
  const me = data?.me || {};
  // console.log("events", events);
  // mutation addPlayer
  const [addPlayer] = useMutation(ADD_PLAYER);
  const handleAddPlayer = async (id) => {
    try {
      await addPlayer({
        variables: { eventId: id },
      });
      // console.log(me)
      console.log(events);
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditEvent = async (eventObj) => {
    history.push(`/events/edit/${eventObj._id}`, eventObj);
  };

  return (
    <ul className="event-list">
      {events.map((eventObj) => (
        <li key={eventObj._id} className="card">
          <Link className="event-link" to={`/event/${eventObj._id}`}>
          <Event event={eventObj}></Event>
          </Link>
          {eventObj.organizerName === me.username ? (
            <button onClick={() => handleEditEvent(eventObj)} className="play-btn">Edit Game</button>
          ) : (
            <button
              className="play-btn"
              onClick={() => {
                handleAddPlayer(eventObj._id);
              }}
            >
              I'm Game!
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EventList;

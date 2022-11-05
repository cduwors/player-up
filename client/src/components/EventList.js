import React from "react";
import Event from "./Event";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

function EventList({events}) {   
  const { data } = useQuery(QUERY_ME);
	const me = data?.me || {}
	console.log("me", me); 
      return (
          <ul className="event-list">
            {events.map((eventObj) => (
              <li key={eventObj._id} className="card">
                <Event event={eventObj}></Event>
                {eventObj.organizerName === me.username ? (<button className="play-btn">Edit Game</button>) :
                 (<button className="play-btn">I'm Game!</button>) 
                }
              </li>
            ))}
          </ul>
      );
}

export default EventList
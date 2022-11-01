import React from "react";
import Event from "./Event";

function EventList({events}) {    
      return (
          <ul className="event-list">
            {events.map((event) => (
              <li key={event._id} className="card">
                <Event event={event}></Event>
                {/* {event.organizerNames === context.user.username ?  */}
                 <button className="play-btn">I'm Game!</button>
                 {/*  :  <button>Edit Game</button>} */}
              </li>
            ))}
          </ul>
      );
}

export default EventList
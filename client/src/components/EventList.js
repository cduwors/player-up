import React from "react";


function EventList({events}) {    
      return (
          <ul className="event-list">
            {events.map((event) => (
              <li key={event._id} className="card">
                <article className="text-box">
                  <h2 className="eventName">{event.eventName}</h2>
                  <span>{event.dateAndTime} <br />
                  {event.location}</span>
                  <p>Description: {event.description}</p>
                  <p>{event.organizerNames} | Players needed: {event.numberPlayersNeeded}</p>
                </article>
                <button className="play-btn">I'm Game!</button>
              </li>
            ))}
          </ul>
      );
}

export default EventList
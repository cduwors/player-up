import React from "react";
import { useParams } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { Link } from "react-router-dom";

// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_EVENTS } from "../utils/queries";

const SingleEvent = () => {
  const { id: eventId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_EVENTS, {
    variables: { id: eventId },
  });
  const event = data?.event || {};
  // console.log(eventId);
  // console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="single-event-background">
    <div>
      <p className="single-event-subtitle">Event Details for:</p>
      <h1 className="single-event-header profile-background">{event.eventName}</h1>
    </div>
    <div>
      <div className="singleEvent">
        <span>
          {event.time} | {event.date} <br />
          <a
            className="mapLink"
            href="https://www.google.com/maps/dir/?api=1"
            target="_blank"
            rel="noreferrer"
          >
            {event.location}
          </a>
        </span>
        <p>Description: {event.description}</p>

        <span>
        Organizer:    
          <Link to={`/profile/${event.organizerName}`} className="profile-link">
            {event.organizerName}
          </Link>
          <br></br>
          Players needed: {event.numberPlayersNeeded}
          <br />
          Players attending:
          {!event.attending ? "0" : pluralize("player", event.attending.length)}
        </span>
      </div>
    </div>
    </section>
  );
};

export default SingleEvent;

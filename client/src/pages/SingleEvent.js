import React from "react";
import { useParams } from "react-router-dom";
import { pluralize } from "../utils/helpers";

import EventList from "../components/EventList";
import Event from "../components/Event";

// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_EVENTS } from "../utils/queries";

const SingleEvent = () => {
  const { id: eventId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_EVENTS, {
    variables: { id: eventId },
  });
  const event = data?.event || {};
  console.log(eventId);
  console.log(data);
  console.log("inhome");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-box">
      <div className="card">
        {/* events on {events.date} */}
        <h2 className="eventName">{event.eventName}</h2>
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
          {event.organizerName} | Players needed: {event.numberPlayersNeeded}{" "}
          <br />
          Players attending:{" "}
          {!event.attending ? "0" : pluralize("player", event.attending.length)}
        </span>
      </div>
    </div>
  );
};

export default SingleEvent;

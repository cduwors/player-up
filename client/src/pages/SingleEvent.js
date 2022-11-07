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
  console.log(eventId);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-box">
      <div className="card">
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
          <Link to={`/profile/${event.organizerName}`} className="profile-link">
            {event.organizerName}
          </Link>
          | Players needed: {event.numberPlayersNeeded}
          <br />
          Players attending:
          {!event.attending ? "0" : pluralize("player", event.attending.length)}
        </span>
      </div>
    </div>
  );
};

export default SingleEvent;

import React from "react";
import { useParams } from "react-router-dom";

import EventList from "../components/EventList";
import Event from "../components/Event";

// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_EVENTS } from "../utils/queries";

const SingleEvent = (props) => {
  const { id: eventId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_EVENTS, {
    variables: { id: props._id },
  });
  const event = data?.event || {};

  console.log("inhome");

  return (
    <div>
      <div className="card">
        <span style={{ fontWeight: 700 }} className="event-link">
          {event.username}
        </span>{" "}
        {/* events on {events.date} */}
        {/* <Event events={event.events} /> */}
      </div>
    </div>
  );
};

export default SingleEvent;

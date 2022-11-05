import React from "react";
import { useParams } from "react-router-dom";

import EventList from "../components/EventList";
import Event from "../components/Event";

// import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_EVENTS } from "../utils/queries";

const SingleEvent = (props) => {
  const { id: eventId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_EVENTS, {
    variables: { id: props.id },
  });
  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("inhome");

  return (
    <div>
      <div className="">
        <p className="">
          <span style={{ fontWeight: 700 }} className="">
            {event.username}
          </span>{" "}
          {/* {event.createdAt} */}
        </p>
        <div className="card-body">
          <p>{event.eventText}</p>
        </div>
      </div>
      fkdmglfngld
    </div>
  );
};

export default SingleEvent;

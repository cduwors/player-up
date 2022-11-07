import React, { useState, useEffect } from "react";
import EventList from "../components/EventList";
import AddEvent from "./AddEvent";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER, QUERY_ALL_EVENTS } from "../utils/queries";
// import Auth from "../utils/auth";

const Profile = () => {
//   const { username: userParam } = useParams();
//   console.log(userParam);

// collect params
  const location = useLocation().pathname;
  const param = location.split("/")[2];
  console.log("param", param);
//   Query user or me
  const { loading, data } = useQuery(param ? QUERY_USER : QUERY_ME, {
    variables: { username: param },
  });
  const userData = data?.me || data?.user || {};
  console.log("userData", userData);
  const events = userData?.events || [];
  console.log(events);

// query all events
const { eventData } = useQuery(QUERY_ALL_EVENTS)
const allEvents = eventData?.events || []
console.log(allEvents)
//   use state
  const [commitmentList, setCommitmentList] = useState(false);
  const [eventList, setEventList] = useState(true);
  const [addEventPage, setAddEventPage] = useState(false);

  const displayCommitments = () => {
    setCommitmentList(true);
    setAddEventPage(false);
	setEventList(false);
  };
  const displayEvents = () => {
    setEventList(true);
    setCommitmentList(false);
    setAddEventPage(false);
  };

  const displayAddEvent = () => {
    setAddEventPage(true);
	setCommitmentList(false);
	setEventList(false);
  };

  // const closeForm = () => {
  // 	setAddEventPage(false)
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cork-board">
      <div className="profile-background">
        <h1 className="event-header">{userData.username}</h1>
        <div className="button-box">
          <button
            onClick={displayEvents}
            className={`list-btn selectEvents ${
              eventList && "green-yellow"
            }`}
          >
            {!param ? ("My Events") : (`${param}'s Events`)}
          </button>
          {!param ? (
            <button
              onClick={displayAddEvent}
              className={`list-btn ${addEventPage && "green-yellow"}`}
            >
              Post a Game
            </button>
          ) : null}
          <button
            onClick={displayCommitments}
            className={`list-btn selectCommitments ${
              commitmentList && "green-yellow"
            }`}
          >
            {!param ? ("My Game Plans") : (`${param}'s Game Plans`)}
          </button>
        </div>
      </div>
      {!addEventPage ? (
        <>
          {commitmentList ? (
            <EventList events={events}></EventList>
          ) : (
            <EventList events={events}></EventList>
          )}
        </>
      ) : (
        <AddEvent setAddEventPage={setAddEventPage} setEventList={setEventList}></AddEvent>
      )}
    </section>
  );
};

export default Profile;

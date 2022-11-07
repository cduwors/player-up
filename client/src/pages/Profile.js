import React, { useState, useEffect } from "react";
import EventList from "../components/EventList";
import AddEvent from "./AddEvent";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_EVENTS } from "../utils/queries";
// import { QUERY_USER_EVENTS } from "../utils/queries";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
// import Auth from "../utils/auth";

const Profile = () => {
	const { username: userParam } = useParams();
	const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
		variables: { username: userParam },
	  });
console.log(userParam)
  // const {userData, setUserData} = useState({})
  const userData = data?.me || data?.user || {};
  console.log("userData", userData);
  const events = userData?.events || [];
  console.log(events);



  const [commitmentList, setCommitmentList] = useState(false);
  const [addEventPage, setAddEventPage] = useState(false);

  const displayCommitments = () => {
    document.querySelector(".selectEvents").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    document.querySelector(".selectCommitments").style.backgroundColor =
      "GREENYELLOW";
    document.querySelector(".selectAdd").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    setCommitmentList(true);
    setAddEventPage(false);
  };
  const displayEvents = () => {
    document.querySelector(".selectEvents").style.backgroundColor =
      "GREENYELLOW";
    document.querySelector(".selectCommitments").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    document.querySelector(".selectAdd").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    setCommitmentList(false);
    setAddEventPage(false);
  };

  const displayAddEvent = () => {
    document.querySelector(".selectAdd").style.backgroundColor = "GREENYELLOW";
    document.querySelector(".selectCommitments").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    document.querySelector(".selectEvents").style.backgroundColor =
      "rgba(255, 255, 255, 0.8)";
    setAddEventPage(true);
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
          <button onClick={displayEvents} className="list-btn selectEvents">
            My Events
          </button>
          {!userParam ? (
            <button onClick={displayAddEvent} className="list-btn selectAdd">
              Post a Game
            </button>
          ): null}
          <button
            onClick={displayCommitments}
            className="list-btn selectCommitments"
          >
            My Game Plans
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
        <AddEvent setAddEventPage={setAddEventPage}></AddEvent>
      )}
    </section>
  );
};

export default Profile;

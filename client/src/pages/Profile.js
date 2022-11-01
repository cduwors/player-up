import React from "react";
import EventList from "../components/EventList";

const Profile = () => {
  const events = [
    {
      _id: 1,
      eventName: "Capture the Flag",
      description:
        "Two teams each have their own flag placed in their “home base.” Objective is to steal the other team's flag and take it home. Players can tag or capture opposing players if they enter enemy territory.",
      dateAndTime: "2pm Sunday, June 12th, 2022",
      location: "Jenks Carpenter Rd, Cary, NC 27519",
      numberPlayersNeeded: "10+",
      organizerNames: "James Douglas",
    },
    {
      _id: 1,
      eventName: "Apples to Apples",
      description:
        "The game of hilarious comparisons with a roll of the dice. Judge awards a chip to the noun he or she deems the best comparison.",
      dateAndTime: "2pm Sunday, June 12th, 2022",
      location: "Jenks Carpenter Rd, Cary, NC 27519",
      numberPlayersNeeded: "4-10",
      organizerNames: "James Douglas",
    },
  ];
  return (
    <section className="cork-board">
      <h1 className="event-header">James Douglas</h1>
      <div className="button-box">
        <button>Your Events</button>
        <button>Your Commitments</button>
      </div>
      <EventList events={events}></EventList>
    </section>
  );
};

export default Profile;

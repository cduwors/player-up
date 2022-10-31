import React from "react";

const Event = () => {
  const events = [
    {
      _id: 1,
      eventName: "Capture the Flag",
      description:
        "Two teams each have their own color flag placed in their “home base.” The objective is to steal the other team's flag and take it to their own base. Players can tag or capture opposing players if they enter enemy territory.",
      dateAndTime: "2pm Sunday, June 12th, 2022",
      location: "White Oak Park 1216, Jenks Carpenter Rd, Cary, NC 27519",
      numberPlayersNeeded: "10+",
      organizerNames: "James Douglas",
    },
    {
      _id: 2,
      eventName: "Clue",
      description:
        "players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
      dateAndTime: "7pm Friday, July 22th, 2022",
      location: "506 Rowan Way, Apex NC",
      numberPlayersNeeded: "2-6",
      organizerNames: "Chelsea Montreal",
    },
    {
      _id: 1,
      eventName: "Capture the Flag",
      description:
        "Two teams each have their own color flag placed in their “home base.” The objective is to steal the other team's flag and take it to their own base. Players can tag or capture opposing players if they enter enemy territory.",
      dateAndTime: "2pm Sunday, June 12th, 2022",
      location: "White Oak Park 1216, Jenks Carpenter Rd, Cary, NC 27519",
      numberPlayersNeeded: "10+",
      organizerNames: "James Douglas",
    },
    {
      _id: 2,
      eventName: "Clue",
      description:
        "players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
      dateAndTime: "7pm Friday, July 22th, 2022",
      location: "506 Rowan Way, Apex NC",
      numberPlayersNeeded: "2-6",
      organizerNames: "Chelsea Montreal",
    },
    {
      _id: 1,
      eventName: "Capture the Flag",
      description:
        "Two teams each have their own color flag placed in their “home base.” The objective is to steal the other team's flag and take it to their own base. Players can tag or capture opposing players if they enter enemy territory.",
      dateAndTime: "2pm Sunday, June 12th, 2022",
      location: "White Oak Park 1216, Jenks Carpenter Rd, Cary, NC 27519",
      numberPlayersNeeded: "10+",
      organizerNames: "James Douglas",
    },
    {
      _id: 2,
      eventName: "Clue",
      description:
        "players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
      dateAndTime: "7pm Friday, July 22th, 2022",
      location: "506 Rowan Way, Apex NC",
      numberPlayersNeeded: "2-6",
      organizerNames: "Chelsea Montreal",
    },
  ];

  return (
    <section className="cork-board">
      <h2 className="event-header">Game On</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event._id} className="card">
            <div>
              <div>{event.eventName}</div>
              <div>{event.description}</div>
              <div>{event.dateAndTime}</div>
              <div>{event.location}</div>
              <div>{event.numberPlayersNeeded}</div>
              <div>{event.organizerNames}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Event;

const db = require("./connection");
const { User, Events } = require("../models");

db.once("open", async () => {
  await Events.deleteMany({});

  const events = await Events.insertMany([
    {
      eventName: "Chess",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "12/15/2022",
      time: "3:57pm",
      location: "Long Leaf Park",
      numberPlayersNeeded: "1",
      organizerName: "Joe",
    },
    {
      eventName: "Uno",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "12/19/2022",
      time: "9:00pm",
      location: "School Cafeteria",
      numberPlayersNeeded: "4",
      organizerName: "Bill",
    },
    {
      eventName: "Ultimate Frisbee",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "12/1/2022",
      time: "3:00pm",
      location: "Founders Park",
      numberPlayersNeeded: "20",
      organizerName: "Jess",
    },
    {
      eventName: "Magic!",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "12/7/2022",
      time: "5:00pm",
      location: "You know where",
      numberPlayersNeeded: "1",
      organizerName: "Tony",
    },
    {
      eventName: "Beer Pong",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "12/15/2022",
      time: "1:00am",
      location: "The garage",
      numberPlayersNeeded: "3",
      organizerName: "John",
    },

    {
      eventName: "Soccer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date: "11/15/2022",
      time: "1:00pm",
      location: "Town Creek Athletic Fields",
      numberPlayersNeeded: "24",
      organizerName: "Brett",
    },
  ]);


  console.log("events seeded");

  await User.deleteMany({});

  await User.create({
    username: "Brian",
    email: "brian@testmail.com",
    password: "password12345",
    events: []
  });

  await User.create({
    username: "Rodolfo",
    email: "rodolfo@testmail.com",
    password: "password12345",
    events: []
  });

  await User.create({
    username: "Melissa",
    email: "melissa@testmail.com",
    password: "password12345",
    events: []
  });

  await User.create({
    username: "Christina",
    email: "christina@testmail.com",
    password: "password12345",
    events: []
  });

  await User.create({
    username: "Morgan",
    email: "morgan@testmail.com",
    password: "password12345",
    events: []
  });

  console.log("users seeded");

  process.exit();
});

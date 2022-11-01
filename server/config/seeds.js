const db = require("./connection");
const { User, Events } = require("../models");

db.once("open", async () => {
  await Events.deleteMany();

  const events = await Events.insertMany([
    {
      eventName: "Chess",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "12/15/2022, 3:57pm",
      location: "Long Leaf Park",
      numberPlayersNeeded: "1",
      organizerNames: "Joe",
    },
    {
      eventName: "Uno",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "12/19/2022, 2:00pm",
      location: "School Cafeteria",
      numberPlayersNeeded: "4",
      organizerNames: "Bill",
    },
    {
      eventName: "Ultimate Frisbee",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "12/1/2022, 3:00pm",
      location: "Founders Park",
      numberPlayersNeeded: "20",
      organizerNames: "Jess",
    },
    {
      eventName: "Magic!",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "12/7/2022, 11:00am",
      location: "You know where",
      numberPlayersNeeded: "1",
      organizerNames: "Tony",
    },
    {
      eventName: "Beer Pong",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "12/15/2022, 1:00am",
      location: "The garage",
      numberPlayersNeeded: "3",
      organizerNames: "John",
    },

    {
      eventName: "Soccer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      dateAndTime: "11/15/2022, 1:00pm",
      location: "Town Creek Athletic Fields",
      numberPlayersNeeded: "24",
      organizerNames: "Brett",
    },
  ]);

  console.log("events seeded");

  await User.deleteMany();

  await User.create({
    username: "Brian",
    email: "brian@testmail.com",
    phone: 910 - 123 - 4567,
    password: "password12345",
  });

  await User.create({
    username: "Rodolfo",
    phone: 910 - 123 - 4568,
    email: "rodolfo@testmail.com",
    password: "password12345",
  });

  await User.create({
    username: "Melissa",
    phone: 910 - 123 - 4569,
    email: "melissa@testmail.com",
    password: "password12345",
  });

  await User.create({
    username: "Christina",
    phone: 910 - 123 - 4564,
    email: "christina@testmail.com",
    password: "password12345",
  });

  await User.create({
    username: "Morgan",
    phone: 910 - 123 - 4565,
    email: "morgan@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});

<<<<<<< HEAD
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
=======
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/playerup', {
>>>>>>> 31bf182f7492e230839c0421f9f9c3877d4c64a1
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

<<<<<<< HEAD
module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> 31bf182f7492e230839c0421f9f9c3877d4c64a1

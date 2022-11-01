// Define the query and mutation functionality to work with the Mongoose models

const { AuthenticationError } = require('apollo-server-express');
const { User, Events } = require('../models');
const { signToken } = require('../utils/auth');

// TODO User type: _id, username, email, bookCount, savedBooks (this will be an array of the Book type)
// TODO Book type: bookId (not the _id, but the book's id value returned from the Google's Book API), authors (an array of strings, as ther emay be more than one author),
// description, title, image, link
// TODO Autho type: token, user (references the User type)

// TODO Query type: me: which returns a user type

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          // .populate('thoughts')
          // .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // users: async () => {
    //   return User.find()
    //     .select('-__v -password')
    //     .populate('thoughts')
    //     .populate('friends');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username })
    //     .select('-__v -password')
    //     .populate('friends')
    //     .populate('thoughts');
    // },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { _id }) => {
    //   return Thought.findOne({ _id });
    // }
  },

// TODO Mutation type: 
//  login: accepts an email and password as parameters; returns an Auth type
//  addUser: Accepts a username, email, and password as parameters; returns an Auth type
//  saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (look into creating whats known as an input type to handle all of those parameters!)
//  removeBook: Accepts a book's bookId as a parameter; returns a User type

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { eventsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToset: { events: { eventsId } } },
          { new: true, runValidators: true }
        ).populate('events');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateEvent: async (parent, { eventsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { events: { eventsId } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    deleteEvent: async (parent, { eventsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: { eventsId } } },
          { new: true }
        );
      return updatedUser;

      }
    throw new AuthenticationError('You need to be logged in!');
    
    }
    
  }
};

module.exports = resolvers;

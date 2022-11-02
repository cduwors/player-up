const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ username: context.user.username })
          .select('-__v -password')
          .populate('events')

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
		users: async () => await User.find({}).populate('events'),
		user: async (parent, {username}) => {
		  return await User.findOne({ username: username }).populate('events');
		  },
		events: async () => {
		  return await User.find({}).sort({ createdAt: -1 });
		},
    userEvents: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Events.find(params).sort({ createdAt: -1 });
    },
    event: async (parent, {_id}) => {
      return Events.findOne({ _id });
    }
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const token = signToken(user);
			return { token, user };
		},
    addPlayer: async (parent, { eventsId }, context) => {
      if (context.user) {
        const updatedEvent = await Event.findOneAndUpdate(
          { _id: eventsId },
          { $addToSet: { attending: { username: context.user.username } } },
          { new: true}
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addEvent: async (parent, { eventsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { events: { eventsId } } },
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
	},
};
module.exports = resolvers;

const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      user: async () => {
        return await User.findOne({ _id: userId }).populate('events');
        },

      events: async () => {
        return await User.find( events ).sort({ createdAt: -1 });
      },
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
    // addPlayer: async (parent, { eventsId }, context) => {
    //   if (context.user) {
    //     const udpatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToset: { players: { playerId } } },
    //       { new: true, runValidators: true }
    //     )
    //     return updatedUser;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
	},
};
module.exports = resolvers;

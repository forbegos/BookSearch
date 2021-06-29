const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("savedBooks");
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate("savedBooks");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
  },
};

module.exports = resolvers;

const { jsFrameworkResolver } = require("./jsFramework.resolver.js");

const resolvers = {
  ...jsFrameworkResolver,
};

module.export = { resolvers };

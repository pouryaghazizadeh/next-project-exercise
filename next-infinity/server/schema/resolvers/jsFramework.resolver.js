const { commentsData} = require("../../data/comment")
const _ = require("lodash");
const jsCommentResolver = {
  Query: {
    allComments: () => {
      return commentsData;
    },
    Comment: (parent, args) => {
      const id = args.id;
      const comment = _.find( commentsData, { id: Number(id) });
      return comment ;
    },
  },
};

module.exports = {jsCommentResolver};


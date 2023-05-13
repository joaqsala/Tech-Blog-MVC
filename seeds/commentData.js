const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'I don\'t believe the X is for extreme.',
    on_which_blog: 1,
    by_which_user: 2,
    createdAt: "2023-05-13 12:54:28",
    updatedAt: "2023-05-13 12:54:28",
  },
  {
    comment_content: 'Serializing makes me want eat cereal.',
    on_which_blog: 2,
    by_which_user: 1,
    createdAt: "2023-05-13 12:56:10",
    updatedAt: "2023-05-13 12:56:10",
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;

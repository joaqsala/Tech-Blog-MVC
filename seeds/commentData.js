const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'Xtremely good observation.',
    blog_id: 1,
    user_id: 2,
    commented_on: "2023-05-13 12:54:28",
    updated_on: "2023-05-13 12:54:28",
  },
  {
    comment_content: 'Serializing makes me want eat cereal.',
    blog_id: 2,
    user_id: 1,
    commented_on: "2023-05-13 12:56:10",
    updated_on: "2023-05-13 12:56:10",
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;

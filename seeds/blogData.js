const { Blog } = require('../models');

const blogdata = [
  {
    blog_title: 'HTML vs XML',
    blog_content: 'An X doesn\'t make it extreme.',
    user_id: 1,
    created_on: '2023-05-13 12:34:56',
    updated_on: '2023-05-13 12:34:56',
  },
  {
    blog_title: 'Sequelize',
    blog_content: 'What is it a sequel to? The original is always better. Thoughts?',
    user_id: 2,
    created_on: '2023-05-13 12:36:00',
    updated_on: '2023-05-13 12:39:15',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;

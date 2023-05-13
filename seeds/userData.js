const { User } = require('../models');

const userdata = [
  {
    username: 'tester1',
    password: 'test1',
  },
  {
    username: 'tester2',
    password: 'test2'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

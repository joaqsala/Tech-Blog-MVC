const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');
//withAuth is only used in the front end not the backend api routes

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    console.log(blogData);
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs)

    res.render('homepage', {
      blogs,
      // logged_in: req.session.logged_in, 
      header: "CheezeMe",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
//withAuth is only used in the front end not the backend api routes

//home routee that displays existing blogs
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
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs)

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in, 
      header: "CheezeMe",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to display a single blog
router.get("/blogs/:id", withAuth, async (req, res) => {
  try {
  const blogData = await Blog.findByPk(req.params.id, {
    // attributes: ['blog_title', 'blog_content', 'created_on'],
      include: [
      {
      model: User,
      attributes: ["username"],
      },
      {
      model: Comment,
      where: {
        blog_id: req.params.id
      }
      },
  ],
  });
  const blogs = blogData.get({ plain: true });
  console.log('seeblog', blogs); //check if 'id' is logged here

  res.render("viewblog", {
      blogs,
      logged_in: req.session.logged_in,
      header: "Single Blog",
  });
  } catch (err) {
  res.status(500).json(err);
  }
});

//route to get login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;

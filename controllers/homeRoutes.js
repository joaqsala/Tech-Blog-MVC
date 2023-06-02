const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
// withAuth is only used in the front end not the backend api routes

// home route that displays existing blogs
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
    console.log(blogs);

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
      header: 'The Tech Blog',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to display a single blog
router.get('/blogs/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment_content', 'commented_on', 'user_id'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });
    const blogs = blogData.get({ plain: true });
    console.log('seeblog', blogs); // check if 'id' is logged here

    res.render('viewblog', {
      blogs,
      logged_in: req.session.logged_in,
      header: 'The Tech Blog',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    header: 'The Tech Blog',
  });
});

// route for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);

    res.render('dashboard', {
      blogs,
      logged_in: req.session.logged_in,
      header: 'Your Dashboard',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for signing up
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {
    header: 'The Tech Blog',
  });
});

// get route for making a new blog
router.get('/dashboard/newblog', withAuth, (req, res) => {
  try {
    res.render('newblog', {
      logged_in: req.session.logged_in,
      header: 'Your Dashboard',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get route to see/edit/delete existing post
router.get('/blogs/:id/edit', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    if (!blogData) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }

    const blog = blogData.get({ plain: true });

    res.render('editblog', {
      blog,
      logged_in: req.session.logged_in,
      header: 'Your Dashboard',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

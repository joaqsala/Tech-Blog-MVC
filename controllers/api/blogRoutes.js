const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//adds a new comment to db (add withAuth after testing)
router.post('/comments', async (req, res) => {
    try {
        console.log("test1 :", req.session.user_id)

        const blogComment = await Comment.create({
            comment_content: req.body.comment_content,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id,
        });

    res.status(200).json(blogComment);
    } catch (err) {
        console.log(err)
    res.status(400).json(err);
    }
});

// post route to add a blog
router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            blog_title: req.body.blogTitle, 
            blog_content: req.body.blogContent,
            user_id: req.session.user_id,
        });
        
    res.status(200).json(blogData);
    } catch (err) {
        console.log(err)
    res.status(400).json(err);
    }
});

router.put('/:blogId', async (req, res) => {
    await Blog.update()
})


module.exports = router;

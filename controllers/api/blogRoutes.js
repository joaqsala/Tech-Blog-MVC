const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//adds a new comment to db (add withAuth after testing)
router.post('/comments', async (req, res) => {
    try {

        console.log("test1 :", req.session.user_id)

        const blogComment = await Comment.create(req.body, {
            user_id: req.session.user_id,
        });

    res.status(200).json(blogComment);
    } catch (err) {
        console.log(err)
    res.status(400).json(err);
    }
});


module.exports = router;

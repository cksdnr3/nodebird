const express = require('express')
const { Post, Image, Comment, Hashtag, User } = require('../models');
const router = express.Router();
const { isLoggedin } = require('./middlewares')

router.post('/', isLoggedin, async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });

        const fullPost = await Post.findOne({

            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: Comment,
            }, {
                model: User,
            }]
        })

        res.status(201).json(fullPost);
    } catch(err) {
        console.error(err);
        next(err)
    }

})

router.post('/:postId/comment', isLoggedin, async (req ,res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });

        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.')
        }

        const comment = await Comment.create({
            content: req.body.content,
            PostId: req.params.postId,
            UserId: req.user.id,
        });

        res.status(201).json(comment);

    } catch(err) {
        console.error(err);
        next(err);
    }
})

router.delete('/', (req, res) => {
    res.json({ id: 1, content: 'DELETE post' })
})


module.exports = router;
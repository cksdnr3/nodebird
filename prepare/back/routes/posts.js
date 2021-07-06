const express = require('express');

const router = express.Router();

const { Post, User, Image, Comment } = require('../models')

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            limit: 10,
            order: [
                [ 'createdAt', 'DESC' ],
                [ Comment, 'createdAt', 'DESC' ]
            ],
            include: [
                { model: Image, },
                {
                    model: User,
                    attribtues: ['id', 'nickname']
                },
                {
                    model: Comment,
                    include: [{
                        model: User,
                        attribtues: ['id', 'nickname']
                    }]
                },
                {
                    model: User,
                    as: 'Likers',
                    attribtues: ['id', 'nickname']
                }
            ]
        });
        res.status(200).json(posts);

    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
const express = require('express');
const { Op } = require('sequelize');

const router = express.Router();

const { Post, User, Image, Comment } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // ... 보다 작은 - Op.lt()
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }

    const posts = await Post.findAll({
      limit: 10,
      where,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        { model: Image },
        {
          model: Post,
          as: 'Retweet',
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image,
          }, {
            model: Comment,
            include: [{
              model: User,
              attributes: ['id', 'nickname'],
            }],
          }, {
            model: User,
            as: 'Likers',
            attributes: ['id'],
          }],
        },
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }],
        },
        {
          model: User,
          as: 'Likers',
          attributes: ['id', 'nickname'],
        },
      ],
    });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

module.exports = router;

const express = require('express');
const { Op } = require('sequelize');
const { Post, User, Image, Comment, Hashtag } = require('../models');

const router = express.Router();

router.get('/:hashtag', async (req, res, next) => {
  try {
    const where = {};

    if (parseInt(req.query.lastId, 10)) {
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
        { model: Hashtag, where: { name: decodeURIComponent(req.params.hashtag) } },
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

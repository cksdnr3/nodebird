const express = require('express');
const { Post, Image, Comment, Hashtag, User } = require('../models');

const router = express.Router();
const { isLoggedin } = require('./middlewares');

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
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id', 'nickname'],
      }],
    });

    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:postId/comment', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });

    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });

    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        { model: User, attribtues: ['id', 'nickname'] },
      ],
    });

    res.status(201).json(fullComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/:postId/like', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });
    console.log(post);
    if (!post) {
      res.status(401).send('존재하지 않는 게시물');
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/:postId/like', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: parseInt(req.params.postId, 10),
        UserId: req.user.id,
      },
    });
    if (!post) {
      res.status(401).send('존재하지 않는 게시물');
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/:postId', isLoggedin, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: parseInt(req.params.postId, 10),
        UserId: req.user.id,
      },
    });

    res.json({ PostId: parseInt(req.params.postId, 10) });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

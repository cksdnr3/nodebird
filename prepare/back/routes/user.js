const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');
const { User, Post, Comment, Image } = require('../models');
const { isLoggedin, isNotLoggedin } = require('./middlewares');

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fullUser = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      return res.status(200).json(fullUser);
    }
    return res.status(200).json(null);
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const fullUser = await User.findOne({
      where: { id: parseInt(req.params.userId, 10) },
      attributes: {
        exclude: ['password'],
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followers',
        attributes: ['id'],
      }],
    });

    if (fullUser) {
      return res.status(200).json(fullUser);
    }
    return res.status(404).send('존재하지 않는 사용자입니다.');
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

router.post('/login', isNotLoggedin, (req, res, next) => {
  passport.authenticate('local', {}, // 전략에 따른 done이 실행되면 다음 callback에 data전달.
    (err, user, info) => { //  done의 매개변수들이 여기에 전달된다.
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }

      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }

        const fullUser = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password'],
          },
          include: [{
            model: Post, // hasMany관계라 modeL: Post가 복수형인 me.Posts가 된다.
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          }],
        });

        return res.json(fullUser);
      });
    })(req, res, next); // 미들웨어 확장 노드의 기법 중 하나
}); // 로그인 전략이 실행됨.

router.post('/logout', isLoggedin, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('ok');
});

// eslint-disable-next-line consistent-return
router.post('/', isNotLoggedin, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exUser) {
      return res.status(403).send('이미 사용중인 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 11);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/nickname', isLoggedin, async (req, res, next) => {
  try {
    console.log(req.body.nickname);
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });

    res.status(200).json({ nickname: req.body.nickname });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/:userId/follow', isLoggedin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) {
      return res.status(403).send('존재하지 않는 유저입니다.');
    }
    await user.addFollowers(req.user.id);

    return res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.delete('/:userId/follow', isLoggedin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });

    if (!user) {
      return res.status(403).send('존재하지 않는 유저입니다.');
    }
    await user.removeFollowers(req.user.id);

    return res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.get('/followings', isLoggedin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    const followings = await user.getFollowings({
      attributes: ['id', 'email', 'nickname'],
    });

    res.status(200).json(followings);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/followers', isLoggedin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    const followers = await user.getFollowers({
      attributes: ['id', 'email', 'nickname'],
    });
    res.status(200).json(followers);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/follower/:userId', isLoggedin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: parseInt(req.params.userId, 10) },
    });
    await user.removeFollowings(req.user.id);

    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/:userId/posts', async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
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

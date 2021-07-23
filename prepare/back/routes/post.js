const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedin } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (err) {
  fs.mkdirSync('uploads');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  // 파일 저장소 = S3
  storage: multerS3({
    // S3 권한 얻기
    s3: new AWS.S3(),
    bucket: 'chanuk-aws',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.post('/', isLoggedin, upload.none(), async (req, res, next) => {
  try {
    const hashtag = req.body.content.match(/(#[^\s#]+)/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    if (hashtag) {
      // hashtag는 다음과 같은 형태의 값을 반환 [[#노드, true], [#리액트, true]]
      const result = await Promise
        .all(hashtag
        // slice() + toLowercase() -> 검색하기 위해 작성

          // findOrCreate() -> 있으면 조회 없으며 생성
          .map((t) => Hashtag.findOrCreate({ where: { name: t.slice(1).toLowerCase() } })));

      await post.addHashtags(result.map((v) => v[0]));
    }

    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 데이터 갯수 체크
        // Promise.all() -> 프로미스 객체를 요소로 가진 배열을 인자로 받고 모든 프로미스를 전부 실행한 뒤에 다음을 실행한다.
        const images = await Promise
          .all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }

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
        { model: User, attributes: ['id', 'nickname'] },
      ],
    });

    return res.status(201).json(fullComment);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.patch('/:postId/like', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });

    if (!post) {
      console.log('------------- 존재하지 않는 게시물');
      return res.status(401).send('존재하지 않는 게시물');
    }

    await post.addLikers(req.user.id);
    return res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.delete('/:postId/like', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: parseInt(req.params.postId, 10),
      },
    });

    if (!post) {
      return res.status(401).send('존재하지 않는 게시물');
    }
    await post.removeLikers(req.user.id);
    return res.json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    return next(err);
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

// upload.array(FormData key) , 사진 한장 올릴 경우 single(FormData key)을 사용하면 된다.
router.post('/images', upload.array('image'), async (req, res) => {
  console.log(req.files); // req.files 에 업로드한 이미지의 정보들이 담겨있다.
  return res.json(req.files.map((v) => v.location));
});

router.post('/:postId/retweet', isLoggedin, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });

    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
    }

    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });

    if (exPost) {
      return res.status(403).send('이미 리트윗한 게시글입니다.');
    }

    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });

    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [{
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
      }, {
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
    });

    console.log(retweetWithPrevPost);

    return res.status(200).json(retweetWithPrevPost);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.get('/:postId', async (req, res, next) => {
  const id = parseInt(req.params.postId, 10);
  try {
    const exPost = await Post.findOne({ where: { id } });

    if (!exPost) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    }

    const post = await Post.findOne({
      where: { id },
      include: [
        { model: User, attributes: ['id', 'nickname'] },
        { model: Post,
          as: 'Retweet',
          include: [{ model: User, attributes: ['id', 'nickname'] }] },
        { model: User, as: 'Likers', attributes: ['id', 'nickname'] },
        { model: Comment,
          include: [{ model: User, attributes: ['id', 'nickname'] }] },
        { model: Image },
      ],
    });

    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

module.exports = router;

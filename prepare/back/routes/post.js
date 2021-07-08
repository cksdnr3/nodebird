const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedin } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (err) {
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) { // INPUT: 노찬욱.png
      const ext = path.extname(file.originalname); // 확장자 추출 ext = ".png"
      const basename = path.basename(file.originalname, ext); // 파일명 추출 basename = "노찬욱"
      // 인풋 중복 방지를 위해 시간을 추가해준다. 파일명 중복 발생시 덮어 씌워버리는 multer의 특성 때문
      done(null, `${basename}_${new Date().getTime()}${ext}`);
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
      // slice() + toLowercase() -> 검색하기 위해 다음과 같은 형태의 값을 반환 [[#노드, true], [#리액트, true]]
      const result = await Promise
        .all(hashtag
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

// upload.array(FormData key) , 사진 한장 올릴 경우 single(FormData key)을 사용하면 된다.
router.post('/images', upload.array('image'), async (req, res, next) => {
  console.log(req.files); // req.files 에 업로드한 이미지의 정보들이 담겨있다.
  res.json(req.files.map((v) => v.filename));
});

module.exports = router;

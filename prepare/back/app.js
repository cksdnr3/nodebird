const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');
const passportConfig = require('./passport');
const db = require('./models');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const hashtagRouter = require('./routes/hashtag');
const postsRouter = require('./routes/posts');

dotenv.config();

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log('db connect failed');
    console.error(err);
  });

passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
  app.use(cors({
    origin: ['http://15.164.62.13', 'http://localhost:3000', 'http://localhost', 'http://chanuk.shop'],
    credentials: true,
  }));
} else {
  app.use(morgan('dev'));
  app.use(cors({
    origin: true,
    credentials: true,
  }));
}

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET, // 이 속성으로 유저 정보가 해싱된다. 해킹을 방지해줘야함.
  cookie: {
    // js 조작 불가능 - js 조작 가능하면 쿠키가 변조될 가능성 있음
    httpOnly: true,
    // https 적용 시 true
    secure: false,
    // 배포환경일 경우 .chanuk.shop 과 cahnuk.shop 사이에 쿠키 공유
    domain: process.env.NODE_ENV === 'production' && '.chanuk.shop',
  },
}));

app.use(passport.initialize());
app.use(passport.session());

// __dirname: 현재 dir이다. path.join(__dirname, 'uploads)' 현재 폴더와 uploads 폴더 경로를 합쳐준다.
// 운여체제에 대한 경로처리를 join(dir)이 해준다.

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);

app.listen(80, () => {
  console.log('Hello, express');
});

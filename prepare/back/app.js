const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const db = require('./models')
const cors = require('cors')
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const postsRouter = require('./routes/posts')
const moragn = require('morgan');

dotenv.config();

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db connected')
    })
    .catch((err) => {
        console.log('db connect failed')
        console.error(err)
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET // 이 속성으로 유저 정보가 해싱된다. 해킹을 방지해줘야함.
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(moragn('dev'))

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

passportConfig();


app.listen(3065, () => {
    console.log('Hello, express');
})
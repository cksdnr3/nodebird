const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const db = require('./models')
const cors = require('cors')
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

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
app.use(cors())
app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use('/post', postRouter);
app.use('/user', userRouter);

passportConfig();

app.get('/',(req, res) => {
    res.send('hello express')
})

app.listen(3065, () => {
    console.log('Hello, express');
})
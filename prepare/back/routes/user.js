const express = require('express')
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => { // done의 매개변수들이 여기에 전달된다.
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason)
        }
        
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            return res.json(user);
        })
    })(req, res, next); // 미들웨어 확장 노드의 기법 중 하나
}); // 로그인 전략이 실행됨.



router.post('/', async (req, res, next) => {
    try {
        const exUser =  await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (exUser) {
            console.log("-----------signup() fail--------------")
            return res.status(403).send('이미 사용중인 이메일입니다.')
        }
        console.log("-----------signup()--------------")
        const hashedPassword = await bcrypt.hash(req.body.password, 11);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        })
        res.status(200).send('ok')
    } catch(err) {
        console.error(err);
        next(error);
    }

})

module.exports = router;
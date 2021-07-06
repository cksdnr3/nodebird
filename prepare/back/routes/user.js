const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');
const { isLoggedin, isNotLoggedin } = require('./middlewares')

router.get('/', async (req, res ,next) => {
    try {
        if (req.user) {
            const fullUser = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password'],
                },
                include: [{
                    model: Post,
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            res.status(200).json(fullUser);
        } else {
            res.status(200).json(null);
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
    
})

router.post('/login', isNotLoggedin, (req, res, next) => {
    passport.authenticate('local', // 전략에 따른 done이 실행되면 다음 callback에 data전달.
    (err, user, info) => { //  done의 매개변수들이 여기에 전달된다.
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

            const fullUser = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password'],
                },
                include: [{
                    model: Post, // hasMany관계라 modeL: Post가 복수형인 me.Posts가 된다.
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })

            return res.json(fullUser);
        })
    })(req, res, next); // 미들웨어 확장 노드의 기법 중 하나
}); // 로그인 전략이 실행됨.

router.post('/', isNotLoggedin, async (req, res, next) => {
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

router.post('/logout', isLoggedin, (req, res) => {
    req.logout();
    req.session.destroy();
    res.status(200).send('ok');
})

router.patch('/nickname', isLoggedin, async (req, res, next) => {
    try {
        const user = await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        
        res.status(200).json({ nickname: user.nickname })
    } catch(err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;
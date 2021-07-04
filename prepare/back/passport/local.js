const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models')
const bcrypt = require('bcrypt');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                where: { email },
            })
            
            if (!user) {
                // done(서버에러, 성공, 클라이언트 에러)
                return done(null, false, { reason: '미가입 사용자입니다.'})
            }
            
            const result = await bcrypt.compare(password, user.password)
            
            if (result) {
                return done(null, user)
            }
            return done(null, false, { reason: '잘못된 비밀번호 입니다.'})
        } catch(err) {
            console.error(err);
            return done(error);
        }
    }));
}
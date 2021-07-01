const passport = require('passport');
const local = require('./local')

module.exports = () => {
    passport.serializeUser(() => {

    }); // 설정

    passport.deserializeUser(() => {

    }); // 설정

    local(); // 로그인 전략
}


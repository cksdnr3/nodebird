const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // session에 쿠키를 user.id와 매핑해줌
  }); // 설정

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: id });
      done(null, user); // 한 번 로그인이된 후에는 req.user에 user가 셋팅된다.
    } catch (err) {
      console.error(err);
      done(err);
    }
  }); // 설정

  local(); // 로그인 전략
};

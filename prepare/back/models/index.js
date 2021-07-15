const Sequelize = require('sequelize');

const comment = require('./comment');
const hashtag = require('./hashtag');
const Image = require('./image');
const Post = require('./post');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = comment;
db.Hashtag = hashtag;
db.Image = Image;
db.Post = Post;
db.User = User;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

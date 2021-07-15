const DataTypes = require('sequelize');

const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     email: {
//       type: DataTypes.STRING(30),
//       allowNull: false, // 필수 요소
//       unique: true, // 고유한 값
//     },
//     nickname: {
//       type: DataTypes.STRING(10),
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING(100), // 비밀번호는 암호화하기 때문에 길어야함
//       allowNull: false,
//     },
//   }, {
//     charset: 'utf8',
//     collate: 'utf8_general_ci', // 한글 저장
//   });
//   User.associate = (db) => {
//     db.User.hasMany(db.Post);
//     db.User.hasMany(db.Comment);
//     db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
//     db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
//     db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
//   };
//   return User;
// };

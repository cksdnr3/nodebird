const DataTypes = require('sequelize');

const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, {
      modelName: 'Comment',
      tableName: 'comments',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// module.exports =  (sequelize, DataTypes) => {
//   const Comment = sequelize.define('Comment', {
//     content: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//   }, {
//     charset: 'utf8',
//     collate: 'utf8_general_ci', // 한글 저장
//   });
//   Comment.associate = (db) => {
//     db.Comment.belongsTo(db.User);
//     db.Comment.belongsTo(db.Post);
//   };
//   return Comment;
// };

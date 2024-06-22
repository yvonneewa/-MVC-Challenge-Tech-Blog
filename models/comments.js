const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
  host: 'localhost',
  // other options
});

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});


// // Define associations
// Comment.belongsTo(Dashboard, {
//   foreignKey: 'dashboardId',
// });

// Export the Comment model
module.exports = Comment;

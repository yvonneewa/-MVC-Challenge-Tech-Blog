const blog = require('./blog');
const comment = require('./comments');
const user = require('./users');
const home = require('./home');

user.hasMany(blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blog.belongsTo(user, {
  foreignKey: 'user_id'
});

blog.hasMany(comment,{
  foreignKey: 'blog_id'
})

comment.belongsTo(user, {
    foreignKey: 'user_id',
})

module.exports = { user, blog, comment };
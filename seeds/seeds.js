const { Blog, Comment, User } = require('../models');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
    // Seed users
    await User.bulkCreate(userData);

    // Seed blogs
    const blogs = await Blog.bulkCreate(blogData);

    // Seed comments
    const comments = await Comment.bulkCreate(commentData);

    // Associate comments with blogs
    await Promise.all(comments.map(comment => {
      const blogId = Math.floor(Math.random() * blogs.length) + 1;
      return comment.setBlog(blogId);
    }));

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();

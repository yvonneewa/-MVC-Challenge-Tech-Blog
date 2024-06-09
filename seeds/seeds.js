const { Blog, Comment, User } = require('../models');
const blogData = require('./blogPostData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
 
    await User.bulkCreate(userData);

  
    const blogs = await Blog.bulkCreate(blogData);

    
    const comments = await Comment.bulkCreate(commentData);

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

const bcrypt = require('bcrypt');
const { User } = require('../models');

const auth = {
  // Function to hash passwords
  hashPassword: async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  },

  // Function to compare passwords
  comparePasswords: async (password, hashedPassword) => {
    try {
      const match = await bcrypt.compare(password, hashedPassword);
      return match;
    } catch (error) {
      throw new Error('Error comparing passwords');
    }
  },

  // Middleware to check if user is authenticated
  isAuthenticated: (req, res, next) => {
    if (req.session.userId) {
      next(); // User is authenticated, continue to the next middleware
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  },
};

module.exports = auth;

const express = require('express');
const session = require('express-session');
const blogRoutes = require('./controllers/api/BLOG_ROUTES');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

// Routes
app.use('/api/blogs', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

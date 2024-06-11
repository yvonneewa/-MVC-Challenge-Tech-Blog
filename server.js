const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const auth = require("./utils/auth"); 
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes =("./controllers");


const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine
const hbs = exphbs.create();

// Sets session cookie properties
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1200000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/",(req,res) => {
//   res.send("homepage")
// })

app.use(routes)

// Syncs sequelize with database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
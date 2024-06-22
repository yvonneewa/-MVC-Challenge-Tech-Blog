const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create();

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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.get("/dashboard", async (req, res) => {
  try {
    // Fetch data necessary for the dashboard from the database
    const dashboardData = await Dashboard.findAll(); // Assuming you want to fetch all dashboard data

    // Render the dashboard view with the fetched data
    res.render("dashboard", { dashboardData });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Handle errors appropriately
    res.status(500).send("Internal Server Error");
  }
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});

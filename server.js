const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieSession = require('cookie-session');
const cors = require("cors");

const routes = require('./controllers/index');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: { secure: true },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(cors({
  origin: [
    "https://shellgeist.com", "http://localhost:3000"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));

app.use(
  cookieSession({
    name: "shellgeist-session",
    secret: "jambalaya",
    httpOnly: true
  })
);

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

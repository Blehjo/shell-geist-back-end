const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require("cors");

const routes = require('./controllers/index');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'process.env.SECRET',
  name: 'shellgeist',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    sameSite: 'none',
    secure: true
  },
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(cors({
  origin: [
    "https://shellgeist.com", "http://localhost:3000"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // preflightContinue: true,
  credentials: true
}));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

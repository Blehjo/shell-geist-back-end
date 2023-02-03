const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require("cors");

const SequelizeStore = require('connect-session-sequelize')(session.Store);
     
const routes = require('./controllers/index');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  // name: 'shellgeist',
  cookie: { 
    maxAge: 600000000,
    httpOnly: true,
    sameSite: 'strict',
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  secret: 'process.env.SECRET',
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(cors({
  origin: [
    "https://shellgeist.com", "http://localhost:3000"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  credentials: true
}));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

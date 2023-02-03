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
    // httpOnly: true,
    sameSite: 'none',
    secure: true,
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
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Powered-By', 'Vary', 'Access-Control-Allow-Credentials', 'Content-Length', 'ETag', 'Date', 'Connection', 'Keep-Alive	'],
  credentials: true,
  preflightContinue: true
}));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// "{"user":{"id":42,"username":"Nani","email":"nani@gmail.com","password":"$2b$10$biC/BCatli6zQ/2Urwl5vOmRWEXEhBuLKQDolIABjjlV3igrc6Mna","country":"Afghanistan","date_of_birth":"1991-06-24","first_name":"Nani","last_name":"Major","about":null,"media_location":null},"message":"You are now logged in!","req":{"cookie":{"originalMaxAge":600000000,"expires":"2023-02-10T22:00:28.757Z","secure":true,"httpOnly":true,"path":"/","sameSite":"lax"},"user_id":42,"logged_in":true}}"
const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require("cors");

const SequelizeStore = require('connect-session-sequelize')(session.Store);
     
const routes = require('./controllers/index');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.disable("X-Powered-By");

app.set("trust proxy", 1);

const sess = {
  name: 'shellgeist',
  cookie: { 
    sameSite: 'none',
    secure: true,
    httpOnly: true,
    maxAge: 600000000,
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
  allowedHeaders: ['Content-Type', 'Authorization', 'Vary', 'Access-Control-Allow-Credentials', 'Content-Length', 'ETag', 'Date', 'Connection', 'Keep-Alive', 'Set-Cookie'],
  credentials: true,
  preflightContinue: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "https://shellgeist.com");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override, Set-Cookie, Cookie");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();  
}); 

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/home');
const detailsRoutes = require('./routes/details');
const adminRoutes = require('./routes/admin');

app.use(express.json());

const PORT = process.env.PORT || 8001;


app.set('view engine','ejs');
app.use('/static', express.static('static'));

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));


const {
    OAuth2Client
} = require("google-auth-library");

const Sequelize = require("sequelize");

const db = require("./models");

//  for image

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null,'-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

app.use('/images', express.static(path.join(__dirname, 'images')));


// All laptops (home)



app.use(homeRoutes);

//  Laptop details Routes
app.use(detailsRoutes);

//  Admin routes

app.use(adminRoutes);


  app.listen((PORT), () => {
    console.log(`your app is running on port ${PORT}`);
  });
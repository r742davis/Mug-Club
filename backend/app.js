//  Dependencies  //
//----------------//
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const path = require('path');

//  Middleware  //
//--------------//
app.use(
  cors({
    origin: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/build')));
} else {
  app.use(express.static(path.join(__dirname, '/client/public/index.html')));
}

app.use(methodOverride("_method"));

//  Customers Controller  //
//------------------------//
const customersController = require("./controllers/customers.js");
app.use("/api/customers", customersController);

//  Beers Controller  //
//------------------------//
const beersController = require("./controllers/beers.js");
app.use("/api/beers", beersController);

//  Users Controller  //
//--------------------//
const usersController = require("./controllers/users.js");
app.use("/api/users", usersController);

//  Auth Controller  //
//-------------------//
const authController = require("./controllers/auth.js");
app.use("/api/auth", authController);

module.exports = app;
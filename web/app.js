//  Dependencies  //
//----------------//
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");

//  Middleware  //
//--------------//
app.use(
  cors({
    origin: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));
app.use(methodOverride("_method"));

//  Customers Controller  //
//------------------------//
const customersController = require("./controllers/customers.js");
app.use("/customers", customersController);

//  Beers Controller  //
//------------------------//
const beersController = require("./controllers/beers.js");
app.use("/beers", beersController);

//  Users Controller  //
//--------------------//
const usersController = require("./controllers/users.js");
app.use("/users", usersController);

//  Auth Controller  //
//-------------------//
const authController = require("./controllers/auth.js");
app.use("/auth", authController);

module.exports = app;
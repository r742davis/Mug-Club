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
app.use(express.static(path.resolve(__dirname, './build/static')));
app.use(methodOverride("_method"));

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

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
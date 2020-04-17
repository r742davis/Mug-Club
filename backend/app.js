//  Dependencies  //
//----------------//
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");

//  Middleware  //
//--------------//
// dotenv.load();
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// app.use(session({
//   secret: "Danny Goatee",
//   resave: false,
//   saveUninitialized: false
// }))
//  Production vs. Local React Environment //
// -----------------------------------------//
if (process.env.NODE_ENV === "development") {
  app.use(express.static("public"));
} else {
  app.use(express.static(path.join(__dirname, "/build")));
}


//  Customers Controller  //
//------------------------//
const customersController = require("./controllers/customers.js");
app.use("/api/customers", customersController);

//  Beers Controller  //
//--------------------//
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

//  Reroute for Client-Side Server Rendering  //
//--------------------------------------------//
// if (process.env.NODE_ENV === "production") {
//   app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });
// }

module.exports = app;

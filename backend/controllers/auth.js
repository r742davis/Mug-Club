const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { promisify } = require("util");
const config = require("config");
const jwt = require("jsonwebtoken");
const authorizeToken = require("../middleware/authorizeToken");
const { transporter, makeANiceEmail } = require("../mail");

const User = require("../models/user.js");

// LOGIN ROUTE //
/////////////////
router.post("/", (req, res) => {
  const { email, password } = req.body;

  //Simple Validation
  if (!email || !password) {
    return res.status(400).json({
      message: "Please Enter All Fields",
    });
  }

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({
        message: "User Does Not Exist",
      });
    }
    //Validate password with bcrypt
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ message: "Incorrect Password" });

      if (isMatch) {
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            });
          }
        );
      }
    });
  });
});

//GET authorizeToken route
router.get("/user", authorizeToken, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

//POST Request Password Reset
router.post("/requestReset", async (req, res) => {
  const { email } = req.body;
  // Find user, check if they are real
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({
        message: `No such user found for email ${user.email}`,
      });
    }

    // Set a reset token and expiry on that user
    const buffer = crypto.randomBytes(25);
    const resetToken = buffer.toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

    const updateTokens = {
      resetPasswordToken: resetToken,
      resetPasswordExpires: resetTokenExpiry,
    };

    User.findByIdAndUpdate(user._id, updateTokens, { new: true }).then(
      (res) => {
        console.log(res);
      }
    );

    // Email them that reset token
    // Return a message on completion
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "58da07d0cd4ab9",
        pass: "fa1eec2c3c471f",
      },
    });
    const makeANiceEmail = (text) => `
      <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
      ">
        <h2>Hello ${user.name}</h2>
        <p>${text}</p>

        <p>Richard Davis</p>
      </div>
      `;

    const mailOptions = {
      from: '"Mr. Pigeon" <pigeon@poo.com>',
      to: user.email,
      subject: "Mug Club - Your Password Reset Token",
      html: makeANiceEmail(`Your Mug Club Password Reset Token is here!
      \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
    };

    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Message sent to: ${user.email}`);
      }
      transporter.close();
    });
  });
});

module.exports = router;

// let createAuthToken = user => {
//   return jwt.sign(
//     { id: user.id },
//     config.get("jwtSecret"),
//     { expiresIn: 3600 },
//     (err, token) => {
//       if (err) throw err;
//       res.json({
//         token,
//         user: {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//         },
//       });
//     }
//   );
// }

// let createRefreshToken = user => {
//   let refreshToken = jwt.sign({
//     type: 'refresh'
//   }, config.get("jwtSecret"), {
//     expiresIn: '20s'
//   });

//   return Users.findOneAndUpdate({
//     email: user.email
//   }, {
//     refreshToken: refreshToken
//   }).then(() => {
//     return refreshToken;
//   }).catch(err => {
//     throw err;
//   })
// }

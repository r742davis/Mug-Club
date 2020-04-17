const jwt = require("jsonwebtoken");
const config = require("config");

function getRefreshToken(payload) {
  // Check how many refresh tokens have been generated
  // and remove them all if >=5
  const refreshToken = jwt.sign(
    { user: payload }, 
    config.get("jwtSecret"), 
    { expiresIn: "30d "}
  );
}

module.exports = getRefreshToken;

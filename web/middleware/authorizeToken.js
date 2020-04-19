const jwt = require("jsonwebtoken");
const config = require("config");

function authorizeToken(req, res, next) {
  const token = req.header("x-auth-token");
  console.log(token);

  //Check for token
  if (!token) {
    return res.status(401).json({
      message: "No token, authorization denied",
    });
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //Error Catch
    if (decoded.permissions === "PUBLIC")
      throw new Error("You do not have permission to do that!");
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({
      message: "Token is not valid",
    });
    console.log("Token is not valid");
  }
}

module.exports = authorizeToken;

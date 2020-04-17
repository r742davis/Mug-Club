const config = require("config");
const jwt = require("jsonwebtoken");

//Always call 3 parameters
function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //Check for token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //Error Catch
    if (decoded.permissions === "PUBLIC") throw new Error("You do not have permission to do that!")
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Token is not valid" });
  }
}

module.exports = auth;
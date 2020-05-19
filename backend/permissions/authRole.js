function authRole(role) {
  return (req, res, next) => {
    if (req.body.role !== role) {
      console.log("You don't have permission");
      res.status(401);
      return res.send("You don't have permission");
    }
    console.log("Yay, you have permission!!!")

    next();
  };
}

module.exports = {
  authRole,
};

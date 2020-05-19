function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log(req);
      res.status(401);
      return res.send("You don't have permission");
    }

    next();
  };
}

module.exports = {
  authRole,
};

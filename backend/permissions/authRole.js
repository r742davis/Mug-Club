function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("You don't have permission");
    }

    next();
  };
}

module.exports = {
  authRole,
};

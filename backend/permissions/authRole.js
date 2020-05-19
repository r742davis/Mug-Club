function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log(req.data.user);
      res.status(401);
      return res.send("You don't have permission");
    }
    console.log(req.data.user)

    next();
  };
}

module.exports = {
  authRole,
};

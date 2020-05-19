const { ROLE } = require("../permissions/roles.js");

function canEditUser(user) {
  return user.role === ROLE.ADMIN || user.role === ROLE.EMPLOYEE;
}

function canDeleteUser(user) {
  return user.role === ROLE.ADMIN || user.role === ROLE.EMPLOYEE;
}

function canCreateUser(user) {
  return user.role === ROLE.ADMIN || user.role === ROLE.EMPLOYEE;
}

module.exports = {
  canEditUser,
  canDeleteUser,
  canCreateUser,
};

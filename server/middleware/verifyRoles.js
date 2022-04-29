const verifyRoles = (...allowdRoles) => {
  return (req, res, next) => {
    if (!req?.roles) {
      return res.sendStatus(401);
    }
    const rolesArray = [...allowdRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) {
      return res.sendStatus(401);
    }
    next();
  };
};

module.exports = verifyRoles;

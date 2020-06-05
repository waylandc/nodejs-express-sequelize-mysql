module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    lastLogin: {
      type: Sequelize.DATE
    }
  });

  return User;
};

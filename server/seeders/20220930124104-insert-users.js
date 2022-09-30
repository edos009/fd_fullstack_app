"use strict";

const generateUser = (key) => ({
  login: `User-${key + 1}`,
  password_hash: `111${key}${key}${key}`,
  created_at: new Date(),
  updated_at: new Date(),
});
const generateUsers = (amount) => {
  return new Array(amount).fill(null).map((u, i) => generateUser(i));
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", generateUsers(20), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

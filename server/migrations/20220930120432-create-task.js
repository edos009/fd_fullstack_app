'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isDone: {
        allowNull: false,
        field: "is_done",
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deadLine: {
        field: "dead_line",
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      userId: {
        allowNull: false,
        field: "user_id",
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'cascade',
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
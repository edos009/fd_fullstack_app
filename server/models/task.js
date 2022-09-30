"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Task.init(
    {
      content: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isDone: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: "is_done",
        defaultValue: false,
      },
      deadLine: {
        type: DataTypes.DATE,
        field: "dead_line",
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      underscored: true,
    }
  );
  return Task;
};

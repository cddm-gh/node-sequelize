import Sequelize from "sequelize";
import sequelize from "../database/database";

import Task from "./Task";

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    deliveryDate: {
      type: Sequelize.DATE
    },
    priority: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
);

Project.hasMany(Task, { foreignKey: "projectid", soruceKey: "id" });
Task.belongsTo(Project, { foreignKey: "projectid", soruceKey: "id" });

export default Project;

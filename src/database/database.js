import Sequelize from "sequelize";

require("../config/config");

const sequelize = new Sequelize("node-psg", "carlosdelgado", "", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  loggin: false
});

export default sequelize;

const { Sequelize, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("library-db", "postgres", "asdfghjkl;", {
  host: "localhost",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

sequelize
  .authenticate()
  .then(() => console.log("Authenticated"))
  .catch((err) => console.log(err));

const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;

db.users = require("../Modals/userModal")(sequelize, DataTypes);
db.books = require("../Modals/booksModal")(sequelize, DataTypes);
db.students = require("../Modals/studentModal")(sequelize, DataTypes);
db.borrows = require("../Modals/borrowModal")(sequelize, DataTypes);

module.exports = db;

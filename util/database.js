const Sequelize=require("sequelize");

const dbseq = new Sequelize("sequelize1","postgres","password",{
    dialect:"postgres",
    host:"localhost",
});

module.exports = dbseq;






// const Sequelize = require("sequelize");

// const seq = new Sequelize("sequelize1", "postgres", "password", {
//   dialect: "postgres",
//   host: "localhost",
// });

// module.exports = seq;

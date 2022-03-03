const Sequelize = require("sequelize");
const dbseq = require("../util/database");

const Order = dbseq.define("order",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Order;






// const Sequelize = require("sequelize");

// const seq = require("../util/database");

// const Order = seq.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   total: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
// });

// module.exports =  Order;

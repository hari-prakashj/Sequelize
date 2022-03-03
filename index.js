const dbseq = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");


dbseq
    .sync()
    .then((result)=>{
    console.log(result);
})
    .catch((err)=>{
    console.log(err);
})





// const sequelize = require("./util/database");

// const Customer = require("./models/customer");
// const Order = require("./models/order");



// sequelize
//     .sync()
//     .then((result)=>{
//     console.log(result);
// })
//     .catch((err)=>{
//     console.log(err);
// })

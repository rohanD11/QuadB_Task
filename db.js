const mongoose = require('mongoose');
const mongoURI =
  "mongodb://rohandupade20:rohandupade20@ac-qlmzjh6-shard-00-00.ird8o9c.mongodb.net:27017,ac-qlmzjh6-shard-00-01.ird8o9c.mongodb.net:27017,ac-qlmzjh6-shard-00-02.ird8o9c.mongodb.net:27017/quadB?ssl=true&replicaSet=atlas-x9bfyn-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectToMongo=()=>{
   return mongoose.connect(mongoURI)
};

module.exports = connectToMongo;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
  //"mongodb+srv://pshady:PShady32@first.kg2ud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

module.exports = mongoose;

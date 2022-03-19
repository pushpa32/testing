const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pshady:PShady32@first.kg2ud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

module.exports = mongoose;

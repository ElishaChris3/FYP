const mongoose = require("mongoose");
const uri =
  "mongodb+srv://elishachris4:12345@foodapp.8w73a.mongodb.net/?retryWrites=true&w=majority&appName=foodapp";

const connectDB = async () => {
  mongoose.connect(uri).then(() => {
    console.log("the database has been connected");
  });
};

module.exports = connectDB;

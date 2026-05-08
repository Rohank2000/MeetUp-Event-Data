const mongoose = require("mongoose");
require("dotenv").config();

const DatabaseConnectConfig = process.env.MONGODB_URI;

const ConnectToDatabase = async () => {
  await mongoose
    .connect(DatabaseConnectConfig)
    .then(() => console.log("connected to the Database."))
    .catch((error) => console.log("Not Connected to the Database", error));
};

module.exports = ConnectToDatabase;
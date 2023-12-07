const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    console.log("Connecting to database...");
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://mongodb_12:82fLqiRKMkjvS3Q@cluster0.jwbeucp.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error to connect to database");
  }
};

module.exports = {
  dbConnection,
};

const express = require("express");
const mongoose = require("mongoose");
const { userRoute } = require("./routes");

const mongoDB = "mongodb://mongo_db:27017/mongolearn";

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoDB, {})
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/user", userRoute);

connectToDB();

module.exports = app;

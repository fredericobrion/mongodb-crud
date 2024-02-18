const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  blog: String,
  age: Number,
  location: String,
});

userSchema.methods.concatanceNameAndBlog = function () {
  this.name = this.name + this.blog;

  return this.name;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

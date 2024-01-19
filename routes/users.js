const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// require("dotenv").config();

// mongoose.connect(process.env.DB_URL);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }]
})

userSchema.plugin(plm);

module.exports = mongoose.model("users", userSchema)
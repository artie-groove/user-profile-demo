const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User profile schema
const DataSchema = new Schema(
  {
    id: Number,
    username: String,
    password: String,
    email: String,
    phone: String,
    newsletters: Boolean,
    birthdate: Date,
    biography: String,
    firstname: String,
    lastname: String,
    photo: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProfile", DataSchema);
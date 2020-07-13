const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },

  // userId: { type: Number, required: false, unique: true },
  // photoUrl: { type: String, required: false },
  // fullName: { type: String, required: false },
  // status: { type: String, required: false },
  // location: { type: String, required: true },
  // followed: false,
});

module.exports = model("User", schema);

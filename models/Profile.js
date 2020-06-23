const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userId: { type: Number, required: true, unique: true },
  photoUrl: { type: String, required: true },
  fullName: { type: String, required: true },
  status: { type: String },
  location: { type: String, required: true },
  followed: false,
  owner: { type: Types.ObjectId, ref: "User" },
  // email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
});

module.exports = model("Profile", schema);

//   id: 1,
//   photoUrl:
//     "https://i1.sndcdn.com/avatars-000024786649-u3uxtd-t500x500.jpg",
//   fullName: "Anatol Kerbs",
//   status: "I'm a boss",
//   location: { city: "Hamburg", country: "Germany" },
//   followed: false,

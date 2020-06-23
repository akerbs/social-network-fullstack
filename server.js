const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const server = express();

server.use(express.json({ extended: true }));

server.use("/api/auth", require("./routes/auth.routes"));
// server.use("/api/profile", reqire("./routes/profile.routes.js"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit("1");
  }
}
start();

server.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`)
);

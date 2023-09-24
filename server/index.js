const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const personRoutes = require("./routes/persons");
const eventRoutes = require("./routes/events");

// Settings for Heroku deployment
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/seerah";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use("/api/persons", personRoutes);
// app.use("/api/events", eventRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

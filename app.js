const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/contactsRouter.js");
const dotenv = require("dotenv");

dotenv.config();

const { DB_Host } = process.env;

const app = express();

mongoose
  .connect(DB_Host)
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});

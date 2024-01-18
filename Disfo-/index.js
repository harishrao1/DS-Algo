const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/UserRoutes");
const app = express();
connectDb();
const port = process.env.PORT || 8081;
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoutes);
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server Listening on PORT ${port}`);
  });
});

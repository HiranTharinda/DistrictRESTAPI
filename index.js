const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const restaurantRoutes = require("./routes/restaurants");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("api/restaurants", restaurantRoutes);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Something wrong happened when connecting to mongodb");
  });

require("./routes/restaurants")(app);

app.listen(PORT, () => {
  console.log("Server Started");
});

const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  img: { type: String, required: true },
  rating: { type: Number, required: true },
  star: { type: Boolean, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = new mongoose.model("Restaurant", RestaurantSchema);

const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Property", PropertySchema);
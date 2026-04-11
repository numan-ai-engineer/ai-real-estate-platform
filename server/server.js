const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/realestate")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const PropertySchema = new mongoose.Schema({
  title: String,
  price: String,
  location: String,
  image: String
});

const Property = mongoose.model("Property", PropertySchema);

// Home route
app.get("/", (req, res) => {
  res.send("Server running");
});

// GET properties
app.get("/api/properties", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// ADD property  ✅ IMPORTANT
app.post("/api/properties", async (req, res) => {

  try {

    const property = new Property(req.body);

    await property.save();

    res.json(property);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
// DELETE property

app.delete("/api/properties/:id", async (req, res) => {

try {

await Property.findByIdAndDelete(req.params.id);

res.json({message:"Property deleted"});

} catch(error){

res.status(500).json({error:error.message});
  res.send("Backend is working");

}

});

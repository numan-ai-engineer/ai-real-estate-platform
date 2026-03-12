const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const { Configuration, OpenAIApi } = require("openai");

// OpenAI setup
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new property
router.post("/add", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.json({ message: "Property added", property });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete property
router.delete("/:id", async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: "Property deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// AI Description Generator
router.post("/generate-description", async (req, res) => {
  const { title, location } = req.body;
  try {
    const prompt = `Write a professional real estate description for a property titled "${title}" located in "${location}".`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
    });

    res.json({ description: completion.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI generation failed" });
  }
});
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {

  try {

    const result = await cloudinary.uploader.upload(req.file.path);

    const property = new Property({
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      description: req.body.description,
      image: result.secure_url
    });

    await property.save();

    res.json(property);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});
router.get("/:id", async (req, res) => {

  try {

    const property = await Property.findById(req.params.id);

    res.json(property);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

module.exports = router;
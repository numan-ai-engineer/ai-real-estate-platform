const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/generate-description", async (req, res) => {
  const { title } = req.body;

  // Later connect OpenAI API
  res.json({
    description: `AI Generated description for ${title}`
  });
});

module.exports = router;
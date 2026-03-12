const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/ai-real-estate")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// --------- Check this part ---------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = require("./image");

// TODO: handle validation for types (hadith, opinion, ayah, etc.))

const SectionSchema = new Schema({
  title: String,
  type: String,
  englishContent: String,
  arabicContent: String,
  image: ImageSchema,
  styling: String,
  backgroundImage: ImageSchema,
});

module.exports = mongoose.model("Section", SectionSchema);

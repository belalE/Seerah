const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = require("./event");
const ImageSchema = require("./image");

const opts = { toJSON: { virtuals: true } };

const PersonSchema = new Schema(
  {
    name: String,
    fullName: String,
    relations: [
      {
        person: {
          type: Schema.Types.ObjectId,
          ref: "Person",
        },
        relation: String,
      },
    ],
    image: ImageSchema,
    description: String,
    tags: [String],
    tribe: String,
    events: [
      {
        event: {
          type: Schema.Types.ObjectId,
          ref: "Review",
        },
        role: String,
      },
    ],
  },
  opts
);

module.exports = mongoose.model("Person", PersonSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = require("./event");
const ImageSchema = require("./image");

const opts = { toJSON: { virtuals: true } };

const PersonSchema = new Schema(
  {
    name: String,
    fullName: String,
    father: { type: Schema.Types.ObjectId, ref: "Person" },
    mother: { type: Schema.Types.ObjectId, ref: "Person" },
    children: [{ type: Schema.Types.ObjectId, ref: "Person" }],
    birth: Date,
    death: Date,
    spouses: [
      {
        spouse: {
          type: Schema.Types.ObjectId,
          ref: "Person",
        },
        marriage: Date,
        divorce: Date,
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

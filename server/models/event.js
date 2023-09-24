const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Section = require("./section");

const EventSchema = new Schema({
  name: String,
  description: String,
  date: Date,
  location: String,
  tags: [String],
  people: [
    {
      person: {
        type: Schema.Types.ObjectId,
        ref: "Person",
      },
      role: String,
    },
  ],
  sections: [
    {
      type: Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
});

EventSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Section.deleteMany({
      _id: {
        $in: doc.sections,
      },
    });
  }
});

module.exports = mongoose.model("Event", EventSchema);

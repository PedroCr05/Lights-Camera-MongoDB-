const Schema = require(`mongoose`);

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    runTime: { type: String, required: true },
    Rating: { type: String, required: true },
    yearReleased: { type: Number, required: true },
    description: { type: String, required: true },
    // Our object IDs
    actor: { type: Schema.Types.ObjectId, ref: `Actor` },
    review: { type: Schema.Types.ObjectId, ref: `Review` },
  },
  { timestamps: true }
);

module.exports = movieSchema;

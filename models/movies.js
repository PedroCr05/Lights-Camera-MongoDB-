const { Schema } = require(`mongoose`);

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    runTime: { type: Number, required: true },
    rating: { type: String, required: true },
    yearReleased: { type: String, required: true },
    description: { type: String, required: true },
    actor: [{ type: Schema.Types.ObjectId, ref: `Actor` }],
    review: [{ type: Schema.Types.ObjectId, ref: `Review` }],
  },
  { timestamps: true }
);

module.exports = MovieSchema;

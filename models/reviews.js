const { Schema } = require(`mongoose`);

const ReviewSchema = new Schema(
  {
    username: { type: String, required: true },
    score: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = ReviewSchema;

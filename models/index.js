const mongoose = require(`mongoose`);
const MovieSchema = require(`./movies`);
const ActorSchema = require(`./actors`);
const ReviewSchema = require(`./reviews`);

const Movie = mongoose.model(`Movie`, MovieSchema);
const Actor = mongoose.model(`Actor`, ActorSchema);
const Review = mongoose.model(`Review`, ReviewSchema);

module.exports = {
  Movie,
  Actor,
  Review,
};

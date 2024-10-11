const express = require(`express`);
const cors = require(`cors`);
const { Movie, Actor, Review } = require(`./models`);
const PORT = process.env.PORT || 3001;
const db = require(`./db`);

const app = express();

app.use(cors());
app.use(express.json());

app.get(`/`, (req, res) => {
  res.send(`Welcome to the movie data!`);
});

app.get(`/movies`, async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

app.get(`/movies/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Movie.findById(id);
    if (!movies) throw Error(`Movie has not been found! Please try again.`);
    res.json(movies);
  } catch (e) {
    console.log(e);
    res.send(`Movie has not been found! Please try again.`);
  }
});

app.get(`/actors`, async (req, res) => {
  const actors = await Actor.find({});
  res.send(actors);
});

app.get(`/actors/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const actors = await Actor.findById(id);
    if (!actors) throw Error(`Actor has not been found! Please insert a name.`);
    res.json(actors);
  } catch (e) {
    console.log(e);
    res.send(`Actor has not been found! Please insert a name.`);
  }
});

app.get(`/reviews`, async (req, res) => {
  const reviews = await Review.find({});
  res.send(reviews);
});

app.get(`/reviews/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findById(id);
    if (!reviews) throw Error(`404 Error. Page not found!`);
    res.json(reviews);
  } catch (e) {
    console.log(e);
    res.send(`404 Error. Page not found!`);
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

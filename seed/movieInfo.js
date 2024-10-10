const db = require(`../db`);
const { Movie, Actor, Review } = require(`../models`);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const actor1 = await new Actor({
    name: `Joaquin Phoenix`,
    age: 49,
    deceased: false,
  });

  const review1 = await new Review({
    username: `Brett P`,
    score: 2,
    comment: `Very disappointing. No wonder the theater was empty with the movie being out for only 5 days. Word of mouth travels fast. Just watch the original again.`,
  });

  const movies = [
    {
      title: `Joker: Folie à Deux`,
      runTime: 138,
      Rating: `33% Rotten Tomatoes`,
      yearReleased: `October 4, 2024`,
      description: `Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.`,
      actor: actor1._id,
      review: review1._id,
    },
  ];

  await Movie.insertMany(movies);
  console.log(`
    ===================================
    =+=+=[New Movie Page Created!]+=+=+
    ===================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();

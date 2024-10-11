const db = require(`../db`);
const { Movie, Actor, Review } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  // -------------All actor Based Variables-------------
  // This four below to the first movie
  await Actor.deleteMany();
  const actor1M1 = await new Actor({
    name: `Joaquin Phoenix`,
    age: 49,
    deceased: false,
  });
  actor1M1.save();

  const actor2M1 = await new Actor({
    name: `Lady Gaga`,
    age: 38,
    deceased: false,
  });
  actor2M1.save();

  const actor3M1 = await new Actor({
    name: `Zazie Beetz`,
    age: 33,
    deceased: false,
  });
  actor3M1.save();

  const actor4M1 = await new Actor({
    name: `Harry Lawtey`,
    age: 27,
    deceased: false,
  });
  actor4M1.save();
  // These four belong to the second movie
  const actor1M2 = await new Actor({
    name: `Glen Powell`,
    age: 35,
    deceased: false,
  });
  actor1M2.save();

  const actor2M2 = await new Actor({
    name: `Adria Arjona`,
    age: 32,
    deceased: false,
  });
  actor2M2.save();

  const actor3M2 = await new Actor({
    name: `Austin Amelio`,
    age: 36,
    deceased: false,
  });
  actor3M2.save();

  const actor4M2 = await new Actor({
    name: `Molly Kate Bernard`,
    age: 36,
    deceased: false,
  });
  actor4M2.save();
  // These four belong to the third movie
  const actor1M3 = await new Actor({
    name: `Robbie Amell`,
    age: 36,
    deceased: false,
  });
  actor1M3.save();

  const actor2M3 = await new Actor({
    name: `Stephen Amell`,
    age: 43,
    deceased: false,
  });
  actor2M3.save();

  const actor3M3 = await new Actor({
    name: `Sung Kang`,
    age: 52,
    deceased: false,
  });
  actor3M3.save();

  const actor4M3 = await new Actor({
    name: `Laysla De Oliveira`,
    age: 32,
    deceased: false,
  });
  actor4M3.save();

  // // These four belong to the fourth movie
  // const actor1M4 = await new Actor({
  //   name: `Tye Sheridan`,
  //   age: 27,
  //   deceased: false,
  // });
  // actor1M4.save();

  // const actor2M4 = await new Actor({
  //   name: `Olivia Cooke`,
  //   age: 30,
  //   deceased: false,
  // });
  // actor2M4.save();

  // const actor3M4 = await new Actor({
  //   name: `Mark Rylance`,
  //   age: 64,
  //   deceased: false,
  // });
  // actor3M4.save();

  // const actor4M4 = await new Actor({
  //   name: `Ben Mendelsohn`,
  //   age: 55,
  //   deceased: false,
  // });
  // actor4M4.save();

  // // These four belong to the fifth movie
  // const actor1M5 = await new Actor({
  //   name: `Tom Hanks`,
  //   age: 68,
  //   deceased: false,
  // });
  // actor1M5.save();

  // const actor2M5 = await new Actor({
  //   name: `Caleb Landry Jones`,
  //   age: 34,
  //   deceased: false,
  // });
  // actor2M5.save();

  // const actor3M5 = await new Actor({
  //   name: `Skeet Ulrich`,
  //   age: 54,
  //   deceased: false,
  // });
  // actor3M5.save();

  // const actor4M5 = await new Actor({
  //   name: `Alexis Raben`,
  //   age: 44,
  //   deceased: false,
  // });
  // actor4M5.save();
  // -------------All review Based Variables-------------
  // These three belong to the first movie
  await Review.deleteMany();
  const review1M1 = await new Review({
    username: `Brett P`,
    score: 40,
    comment: `Very disappointing. No wonder the theater was empty with the movie being out for only 5 days. Word of mouth travels fast. Just watch the original again.`,
  });
  review1M1.save();

  const review2M1 = await new Review({
    username: `Kyle Smith`,
    score: 20,
    comment: `The falloff in quality from "Joker," a genuinely searing innovation in comic-book movies, to this one is so steep that it’s comparable to the dropoff between “The Hangover” and “The Hangover Part II.”`,
  });
  review2M1.save();

  const review3M1 = await new Review({
    username: `Michelle`,
    score: 10,
    comment: `If I could give this 0 stars I would, its not even worth the half a star Im forced to give!!!!!!! This was a horrible movie a TOTAL WASTE OF MONEY!!!! I should get a refund for this was a complete waste of my time!!! I left the theater angry!!!!! This movie was boring, stupid, waste of time and my money, nothing at all like Joker and Harley in the comics!!!! Bring the Joker and Harley from Suicide Squad and make a movie with them!!!`,
  });
  review3M1.save();

  // These three belong to the second movie
  const review1M2 = await new Review({
    username: `Patrick`,
    score: 80,
    comment: `This movie was an absolute delight. I’m not a rom com person but those elements of this movie were amazing. Some of the best on screen chemistry I’ve seen in a while. Highly recommend this in the theater if you get the chance!`,
  });
  review1M2.save();

  const review2M2 = await new Review({
    username: `Tara Brady`,
    score: 70,
    comment: `Based on a profile of Johnson in Texas Monthly magazine, by Skip Hollandsworth, this old-fashioned sexy caper makes merry with unreliable narration, slapstick and the stress of remembering which lie you told.`,
  });
  review2M2.save();

  const review3M2 = await new Review({
    username: `J`,
    score: 100,
    comment: `Loved it and Glen Powell is great in it! The one thing I didn't like was that at the end, he replaced his cats with dogs :(`,
  });
  review3M2.save();
  // These three belong to the third movie
  const review1M3 = await new Review({
    username: `Samuel H`,
    score: 80,
    comment: `Pretty good budget sci fi. We lack good action high concept sci-fi without unfunny jokes like this one`,
  });
  review1M3.save();

  const review2M3 = await new Review({
    username: `Anonymous`,
    score: 60,
    comment: `The story is interesting and the theme very dystopian, but somehow it feels rathee realistic. The acting of the Amell cousin however is terrible, and I don't know how he landed that job other than being Stephen Amell's cousin, sorry. His acting was borderline cringe. The rest of the cast did good, the writing is okay (the cliché of good cop/bad cop I hoped had a certain meaning but it is way too cheesy). But I appreciate the effort and idea of the story.`,
  });
  review2M3.save();

  const review3M3 = await new Review({
    username: `Sparrow H`,
    score: 60,
    comment: `No bad, but had the potential to do more.`,
  });
  review3M3.save();

  // // These three belong to the fourth movie
  // const review1M4 = await new Review({
  //   username: `Patrick`,
  //   score: 80,
  //   comment: `The 70MM was excellent. I already liked the film but seeing it again in this way was a dream, and I enjoyed it quite a bit. :)`,
  // });
  // review1M4.save();

  // const review2M4 = await new Review({
  //   username: `Cfunk D`,
  //   score: 10,
  //   comment: `Absolutely stupid movie that goes nowhere. All it is is pop culture references. While the world burns people are obsessed with a video game. Absolutely pathetic. Doesn't do the book justice.`,
  // });
  // review2M4.save();

  // const review3M4 = await new Review({
  //   username: `Lucas M`,
  //   score: 100,
  //   comment: `Very fun film, the part that takes place inside the game is wonderful, the direction is excellent, when the scenes take place outside the game the film doesn't maintain the same level, but I had a lot of fun!`,
  // });
  // review3M4.save();
  // // These three belong to the fifth movie
  // const review1M5 = await new Review({
  //   username: `BC`,
  //   score: 80,
  //   comment: `Good story, good acting (You can't go wrong with Tom Hanks and a cute dog as the stars...). I realize that this film presented a boots-on-the-ground, tactical perspective, and not a big picture view, but I wish the story would have provided a little more meat around the background of how he got to the place he was. Still, it was a very enjoyable flick.`,
  // });
  // review1M5.save();

  // const review2M5 = await new Review({
  //   username: `Auden G`,
  //   score: 100,
  //   comment: `Lovely movie. Good acting, well story-boarded with heavy hitting emotional seanse that leave you a stronger understanding of each character's drive. It may not be the best film, but it surtenly pulls on the strings of your heart. More importantly, it accomplished what it set out to do. Convey how fleeting life is and it's need for love. (would have rated 4 stars but it already has a bad rating).`,
  // });
  // review2M5.save();

  // const review3M5 = await new Review({
  //   username: `Ade P`,
  //   score: 80,
  //   comment: `You really can’t go wrong with a Tom Hanks movie and this is no exception. The premise and backdrop of the film were spot on, leaving you to take in the fine acting. Watched it a second time and it was just as enjoyable.`,
  // });
  // review3M5.save();
  // -------------The movie section for housing our children-------------
  const movies = [
    {
      title: `Joker: Folie à Deux`,
      runTime: 138,
      rating: `33% Rotten Tomatoes`,
      yearReleased: `October 4, 2024`,
      description: `Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.`,
      actor: [actor1M1._id, actor2M1._id, actor3M1._id, actor4M1],
      review: [review1M1._id, review2M1, review3M1],
    },
    {
      title: `Hit Man`,
      runTime: 110,
      rating: `85% Rotten Tomatoes`,
      yearReleased: `May 24, 2024`,
      description: `Professional killer Gary Johnson breaks protocol to help a desperate woman trying to flee an abusive husband and finds himself falling for her.`,
      actor: [actor1M2._id, actor2M2._id, actor3M2._id, actor4M2],
      review: [review1M2._id, review2M2, review3M2],
    },
    {
      title: `Code 8`,
      runTime: 98,
      rating: `81% Rotten Tomatoes`,
      yearReleased: `December 13, 2019`,
      description: `A desperate young man with special powers commits a series of petty crimes and is hunted by a militarised police force.`,
      actor: [actor1M3._id, actor2M3._id, actor3M3._id, actor4M3._id],
      review: [review1M3._id, review2M3._id, review3M3._id],
    },
    // {
    //   title: `Ready Player One`,
    //   runTime: 140,
    //   rating: `72% Rotten Tomatoes`,
    //   yearReleased: `March 29, 2018`,
    //   description: `In 2045 the planet is on the brink of chaos and collapse, but people find salvation in the OASIS: an expansive virtual reality universe created by eccentric James Halliday. When Halliday dies, he promises his immense fortune to the first person to discover a digital Easter egg that's hidden somewhere in the OASIS. When young Wade Watts joins the contest, he finds himself becoming an unlikely hero in a reality-bending treasure hunt through a fantastical world of mystery, discovery and danger.`,
    //   actor: [actor1M4._id, actor2M4._id, actor3M4._id, actor4M4._id],
    //   review: [review1M4._id, review2M4._id, review3M4._id],
    // },
    // {
    //   title: `Finch`,
    //   runTime: 115,
    //   rating: `74% Rotten Tomatoes`,
    //   yearReleased: `November 5, 2021`,
    //   description: `A robot that lives on a post-apocalyptic earth which was built to protect the life of his dying creator's beloved dog, it learns about love, friendship, and the meaning of human life.`,
    //   actor: [actor1M5._id, actor2M5._id, actor3M5._id, actor4M5._id],
    //   review: [review1M5._id, review2M5._id, review3M5._id],
    // },
  ];
  await Movie.deleteMany();
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

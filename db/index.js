const mongoose = require(`mongoose`);

mongoose
  .connect(
    `mongodb+srv://PedroCr05:2hjmI1jKWsKbdvGq@clusters.k4z0f.mongodb.net/GA-Theatre?retryWrites=true&w=majority&appName=clusters`
  )
  .then(() => {
    console.log(`
        =========================================
        ===[Successfully connected to MongoDB]===
        =========================================
        `);
  })
  .catch((e) => {
    console.error(
      `
        ========================================
        =============[Error, STOP!]=============
        ========================================
        `,
      e.message
    );
  });

mongoose.set(`debug`, true);
const db = mongoose.connect;

module.exports = db;

const sequelize = require('../config/connection');
const seedProfiles = require('./userProfileSeed');
const seedPosts = require('./userPostSeed');
const seedFriendships = require('./friendshipSeed');
const seedComments = require('./commentSeed');
const seedLikes = require('./likeSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProfiles();

  await seedPosts();
  
  await seedFriendships();
  
  await seedComments();
  
  await seedLikes();

  process.exit(0);
};

seedAll();
